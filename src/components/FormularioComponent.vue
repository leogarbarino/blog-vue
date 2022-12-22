<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">Formulario</h2>

        <form class="mid-form" @submit.prevent="mostrarUsuario()">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input
              type="text"
              name="nombre"
              v-model="user.nombre"
              placeholder="Ingresa tu nombre..."
            />
            
          </div>

          <div class="form-group">
            <label for="apellido">Apellido:</label>
            <input
              type="text"
              name="apellido"
              v-model="user.apellido"
              placeholder="Ingresa tu apellido..."
            />
             
          </div>

          <div class="form-group">
            <label for="bio">Biografía:</label>
            <textarea name="bio" v-model="user.bio"></textarea>
            
          </div>

          <div class="form-group radiobuttons">
            <input
              type="radio"
              name="genero"
              value="hombre"
              v-model="user.genero"
            />Hombre
            <input
              type="radio"
              name="genero"
              value="mujer"
              v-model="user.genero"
            />Mujer
          </div>

          <div class="clearfix"></div>

          <input type="submit" value="Envíar" class="btn btn-success" />
        </form>

        <div class="datos" v-if="user.nombre && user.apellido">
          <h3>{{ user.nombre + " " + user.apellido }}</h3>
          <h4>{{ user.bio }}</h4>
          <h4>{{ user.genero }}</h4>
        </div>
      </section>
      <SidebarComponent></SidebarComponent>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from "./SidebarComponent.vue";


export default {
 
  name: "FormularioComponent",
  components: {
    SidebarComponent,
  },

  

  data() {
    return {
     
      user: {
        nombre: "",
        apellido: "",
        bio: "",
        genero: "",
      }
    };
  },

  methods: {
    mostrarUsuario() {
      console.log(this.user);
      
     
    }
  }
};
</script>
