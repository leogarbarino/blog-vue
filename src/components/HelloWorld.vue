<template>
  <section id="content">
            <h2 class="subheader">{{ texto }}</h2>
   
    
    <h3>{{ nombre }}</h3>
    <h4>{{ profesion }}</h4>
    <h5>{{ fecha }}</h5>
    
    
  </section>
</template>

<script>

export default {
  name: 'HelloWorld',
  
  props: {
    msg: String
  },
  data(){
    return{
      texto:"Hola mundo desde el componente!",
      nombre:"Leonardo Garbarino",
      profesion:"Desarrollador Frontend",
      fecha: "Julio de 2022"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
