<template src="./CreateArticleComponent.html"></template>

<script>
import SidebarComponent from "./SidebarComponent.vue";
import Article from "../models/Article";
import { Global } from "@/Global";
import axios from "axios";
import swal from "sweetalert";

export default {
  name: "EditArticleComponent",
  components: {
    SidebarComponent,
  },
  data() {
    return {
      url: Global.url,
      article: new Article("", "", null, ""),
      file: "",
      isEdit: true
    };
  },
  mounted() {
    console.log(this.article);
    var articleId= this.$route.params.id;
    this.getArticle(articleId);
  },
  methods: {
    fileChange() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
    getArticle(articleId) {
      axios.get("http://localhost:3900/article/" + articleId).then((res) => {
        if (res.data.status == "success") {
          this.article = res.data.article;
        }
      });
    },
    save() {
      console.log(this.article);
      var articleId= this.$route.params.id;

      axios
        .put(this.url + "article/" + articleId, this.article)
        .then((res) => {
          if (res.data.status == "success") {
            // Subida del archivo (imagen)
            if (
              this.file != null &&
              this.file != undefined &&
              this.file != ""
            ) {
              const formData = new FormData();
              formData.append("file0", this.file, this.file.name);
              // Peticion ajax
              var articleId = res.data.article._id;
              axios
                .post(this.url + "upload-image/" + articleId, formData)
                .then((res) => {
                  if (res.data.article) {
                    swal(
                      "Artículo editado",
                      "El artículo se ha editado correctamente!",
                      "success"
                    );

                    this.article = res.data.article;
                    this.$router.push("/articulo/" + this.article._id);
                  } else {
                    // Mostrar mensaje de error
                    swal(
                      "Error al crear artículo",
                      "El artículo no se ha podido editar, revise",
                      "error"
                    );
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            } else {
              swal(
                "Artículo editado",
                "El artículo se ha editado correctamente!",
                "success"
              );
              this.article = res.data.article;
              this.$router.push("/articulo/" + this.article._id);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
