<template>
<div class="general">
  
  <div class="center">
  <section id="content">
    <h1 class="subheader">Películas</h1>

    <div clas="favorita" v-if="favorita">
    <h3><i>Película Favorita:</i></h3>
     {{favorita.title}}
    </div>



    <!--LISTADO ARTICULOS-->
    <div id="articles">
      <div v-for="pelicula in peliculasMayuscula" v-bind:key="pelicula.title">
        <PeliculaComponent :pelicula="pelicula" @favorita="haLlegadoLaPeliculaFavorita"></PeliculaComponent>
      </div>
    </div>
  </section>
  <SidebarComponent></SidebarComponent>
  <div class="clearfix"></div>
  </div>
  </div>
</template>

<script>

import PeliculaComponent from "./PeliculaComponent.vue";
import SidebarComponent from "./SidebarComponent.vue";
export default {
  name: "PeliculasComponent",
  components: {
    PeliculaComponent,
    SidebarComponent,
},
methods: {
  haLlegadoLaPeliculaFavorita(favorita){
    this.favorita= favorita;
  }
},
// filters: {
//  concatenaYear(value){
//   var date= new Date();
//   return value + " " + date.getFullYear;
//  }
//},
computed: {
  peliculasMayuscula(){
     var peliculasMod= this.peliculas;
    for(var i=0; i<this.peliculas.length; i++){
      peliculasMod[i].title= peliculasMod[i].title.toUpperCase();
    }
   
    return peliculasMod;
  }
},
  data() {
    return {
      favorita: null,
      peliculas: [
        {
          title: "Spiderman 4",
          year: 2019,
          image: "https://wallpapercave.com/wp/L7CROlA.jpg",
        },
        {
          title: "Encanto",
          year: 2021,
          image:
            "https://gogocatrina.com/wp-content/uploads/2021/11/mirabel-encanto.jpg",
        },
        {
          title: "Sonic 2",
          year: 2022,
          image:
            "https://phantom-marca.unidadeditorial.es/b27b101408b7c09524e5bf4c7976c5ec/crop/0x635/1200x1306/resize/1320/f/jpg/assets/multimedia/imagenes/2021/12/10/16391010713852.jpg",
        },
        {
          title: "Top Gun: Maverick",
          year: 2022,
          image:
            "https://estereofonica.com/wp-content/uploads/2022/05/top-gun-2-macerick-tom-cruise-nos-hace-regresar-al-cine-y-a-los-80s_1653297680-702523-1653300885-noticia-normal.jpg",
        },
        {
          title: "La cacería",
          year: 2012,
          image: "https://i.ytimg.com/vi/-h2Uh9P4c8k/maxresdefault.jpg",
        },
        {
          title: "Turning red",
          year: 2022,
          image:
            "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/FN3FNUKUA5BGHKMP5W7DN7FRY4.jpg",
        },
        {
          title: "Jurassic World: Dominion",
          year: 2021,
          image:
            "https://as01.epimg.net/meristation/imagenes/2022/06/08/reportajes/1654679321_653974_1654681984_noticia_normal.jpg",
        },
        {
          title: "Alerta Roja",
          year: 2021,
          image:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/alerta-roja-netflix-pelicula-1634826059.jpg",
        },
      ],
    };
  },
};
</script>
