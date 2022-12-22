<template>
  <div class="general">
    <SliderComponent :texto="'Busqueda: ' + searchString"> </SliderComponent>
    <div class="center">
      <section id="content">
        <h1 class="subheader" v-if="articles">Artículos encontrados</h1>
         <h1 class="subheader" v-else>No hay resultados</h1>

        <div id="articles" v-if="articles">
          <ArticlesComponent :articles="articles"></ArticlesComponent>
        </div>
        <div v-else>
          <h2>No hay artículos que coincidan con tu búsqueda</h2>
        </div>
      </section>
      <SidebarComponent></SidebarComponent>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import SliderComponent from "./SliderComponent.vue";
import SidebarComponent from "./SidebarComponent.vue";
import axios from "axios";
import { Global } from "@/Global";
import ArticlesComponent from "./ArticlesComponent.vue";

export default {
  name: "SearchComponent",
  components: {
    SliderComponent,
    SidebarComponent,
    ArticlesComponent,
  },
  mounted() {
    this.searchString = this.$route.params.searchString;
    this.getArticlesBySearch(this.searchString);
  },

  data() {
    return {
      url: Global.url,
      articles: [],
      searchString: null
    };
  },

  methods: {
    getArticlesBySearch(searchString) {
      axios.get(this.url + "search/" + searchString).then((res) => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;

         
        }
      });
    },
  },
};
</script>
