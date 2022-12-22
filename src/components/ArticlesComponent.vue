<template>
  <section id="articles-component">
    <div id="articles-list" v-if="articles && articles.length >= 1">
      <article
        class="article-item"
        v-for="article in articles"
        :key="article._id"
      >
        <div class="image-wrap">
          <img
            :src="url + 'get-image/' + article.image"
            :alt="article.title"
            v-if="article.image"
          />
          <img
            :src="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAUmka06uFKW8BxmZXi8uH_N1euTnUnTWmhQ&usqp=CAU'"
            :alt="article.title"
            v-if="!article.image"
          />
        </div>

        <h2>
          <router-link :to="{ name: 'article', params: { id: article._id } }">
            {{ article.title }}
          </router-link>
        </h2>
        <span class="date">
          {{ article.date }}
        </span>
        <router-link :to="{ name: 'article', params: { id: article._id } }">Leer mas...</router-link>
        <div class="clearfix"></div>
      </article>
    </div>
    <div v-else-if="articles == 0">No hay articulos para mostrar</div>
    <div v-else>Cargando..</div>
  </section>
</template>

<script>
import moment from "moment";
import { Global } from "@/Global";
export default {
  methods: {
    dateTime(value) {
      return moment(value).format("from", "now");
    },
  },
  name: "ArticlesComponent",
  props: ["articles"],
  data() {
    return {
      url: Global.url,
    };
  },
};
</script>
