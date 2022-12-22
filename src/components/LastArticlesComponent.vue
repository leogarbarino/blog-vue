<template>
<div class="general">
  <SliderComponent texto="Bienvenido al curso de Vue" home="true">

  </SliderComponent>
  <div class="center">
    <section id="content">
      <h2 class="subheader">Últimos artículos</h2>

      <!--LISTADO ARTICULOS-->
      <div id="articles">
        <ArticlesComponent v-bind:articles="articles"></ArticlesComponent>
      </div>
    </section>
    <SidebarComponent></SidebarComponent>
    <div class="clearfix"></div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import SliderComponent  from './SliderComponent.vue';
import SidebarComponent from './SidebarComponent.vue';
import ArticlesComponent from './ArticlesComponent.vue';
import { Global } from '@/Global';

export default {
  name: "LastArticlesComponent",
  components: {
    SliderComponent,
    SidebarComponent,
    ArticlesComponent
  },
  mounted() {
    
    this.getLastArticles();
  },

  data() {
    return {
      url:Global.url,
      articles: [],
    };
  },

  methods: {
    getLastArticles() {
      axios.get(this.url + "articles/true").then((res) => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;

          console.log(this.articles);
        }
      });
    }
  }
};
</script>
