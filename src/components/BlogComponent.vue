<template>
  <div class="general">
    <SliderComponent texto="Blog"> </SliderComponent>
    <div class="center">
      <section id="content">
        <h1 class="subheader">Blog</h1>

        <div id="articles" v-if="articles">
          <ArticlesComponent :articles="articles"></ArticlesComponent>
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
import { Global } from "../Global";
import ArticlesComponent from "./ArticlesComponent.vue";

export default {
  name: "BlogComponent",
  components: {
    SliderComponent,
    SidebarComponent,
    ArticlesComponent
  },
  mounted() {
    
    this.getArticles();
  },

  data() {
    return {
      url:Global.url,
      articles: [],
    };
  },

  methods: {
    getArticles() {
      axios.get(this.url + "articles").then((res) => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;

          console.log(this.articles);
        }
      });
    },
  },
};
</script>
