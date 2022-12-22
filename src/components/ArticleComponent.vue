<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <article class="article-item article-detail" v-if="article">
          <div class="image-wrap">
            <img
              :src="url + 'get-image/' + article.image"
              :alt="article.title"
              v-if="article.image"
            />
            <img
              src="https://fagorelectrodomestico.com.vn/template/images/default-post-image.jpg"
              :alt="article.title"
              v-else
            />
          </div>
          <h1 class="subheader">{{ article.title }}</h1>

          <span class="date"> {{ article.date }}</span>
          <p>
            {{ article.content }}
          </p>
          <div class="clearfix"></div>

          <router-link :to="'/editar/' + article._id" class="btn btn-warning">Editar</router-link>
          <a @click="deleteArticle(article._id)" class="btn btn-danger">Eliminar</a>

        </article>
      </section>
      <SidebarComponent></SidebarComponent>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from "./SidebarComponent.vue";
import { Global } from "@/Global";
import axios from "axios";
import swal from 'sweetalert';

export default {
  name: "ArticleComponent",
  components: { SidebarComponent },
  data() {
    return {
      url: Global.url,
      article: null,
    };
  },
  mounted() {
    var articleId = this.$route.params.id;
    this.getArticle(articleId);
  },
  methods: {
    getArticle(articleId) {
      axios.get("http://localhost:3900/article/" + articleId).then((res) => {
        if (res.data.status == "success") {
          this.article = res.data.article;
        }
      });
    },
    deleteArticle(articleId){
      axios.delete("http://localhost:3900/article/" + articleId) 
          .then(res => {
              swal(
                "Artículo borrado",
                "El artículo se ha borrado correctamente",
                "success"

              );
              this.$router.push("/blog");
          });
    }
  },
};
</script>
