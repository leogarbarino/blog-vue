<template src="./CreateArticleComponent.html"></template>

<script>
import SidebarComponent from "./SidebarComponent.vue";
import Article from "../models/Article";
import { Global } from "@/Global";
import axios from "axios";
import swal from "sweetalert";

export default {
  name: "CreateArticleComponent",
  components: {
    SidebarComponent,
  },
  data() {
    return {
      url: Global.url,
      article: new Article("", "", null, ""),
      file: "",
    };
  },
  mounted() {
    console.log(this.article);
  },
  methods: {
    fileChange() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
    save() {
      console.log(this.article);

      axios
        .post(this.url + "save", this.article)
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
                      "Artículo creado",
                      "El artículo se ha creado correctamente!",
                      "success"
                    );

                    this.article = res.data.article;
                    this.$router.push("/blog");
                  } else {
                    // Mostrar mensaje de error
                    swal(
                      "Error al crear artículo",
                      "El artículo no se ha podido guardar, revise",
                      "error"
                    );
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            } else {
              swal(
                "Artículo creado",
                "El artículo se ha creado correctamente!",
                "success"
              );
              this.article = res.data.article;
              this.$router.push("/blog");
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
