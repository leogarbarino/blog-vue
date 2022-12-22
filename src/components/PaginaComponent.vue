<template>
<div class="general">
  <SliderComponent texto="Página de Pruebas" home="true">

  </SliderComponent>
  <div class="center">
   <section id="content">
            <h2 class="subheader">Página de pruebas</h2>
            <h3>{{ id_desde_url }}</h3>
            <button @click="actualizarNombre()">Actualizar nombre</button>
            <button @click="redirigirAlBlog()">Redirigir</button>
            <h4>{{ nombre }}</h4>
   </section>
    <SidebarComponent></SidebarComponent>
    <div class="clearfix"></div>
  </div>
  </div>
   </template>


<script>
import SliderComponent  from './SliderComponent.vue';
import SidebarComponent from './SidebarComponent.vue';
  export default {
    name: "PaginaComponent",
    components: {
    SliderComponent,
    SidebarComponent
  },
    created(){
      console.log("Componente creado");
    },

    mounted(){
      this.id_desde_url= this.$route.params.id;
      console.log("Componente montado");
    },

    updated(){
      console.log("Componente actualizado");
    },

    unmounted(){
      console.log("Componente destruído");
    },

    data(){

      return{
        id_desde_url: null,
        nombre:"Leo"
      };
      
    },

    methods: {
      actualizarNombre(){
         this.nombre="Leonardo Garbarino";
         console.log(this.nombre);
      },

      redirigirAlBlog(){
        this.$router.push("/blog");
      }

    }
  };

</script>
