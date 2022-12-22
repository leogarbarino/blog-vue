<template>
<section id="content">
            <h2 class="subheader">{{ titulo }}</h2>
    <hr/>
    <h1>Este es MiComponente</h1>
    <h2>{{ texto }}</h2>
    <hr/>

    <h2>Reactividad</h2>
    <input type="text" v-model="nombre"/>
    Mi nombre es : <strong>{{nombre}}</strong>

    <h2>Directivas condicionales</h2>
    <input type="number" v-model="edad" />
    Mi edad es: <strong>{{edad}}</strong>

    <p style="color:blue" v-if="edad && edad >= 18 && edad < 65"><strong>Eres mayor de edad</strong></p>

    <p style="color:green" v-else-if="edad && edad >= 65"><strong>Eres de avanzada edad</strong></p>

    <p style="color:red" v-else><strong>Eres menor de edad</strong></p>

    <h2>Directiva iterativa</h2>
    <h3>Series Favoritas:</h3>
    <ol>
      <li style="list-style-type: none;" v-for="serie in series" :key="serie">{{serie}}</li>
    </ol>


</section>
</template>

<script>
export default {
 
  data(){
    return{
      titulo:"Mi Componente",
      texto:"Texto creado desde Mi Componente",
      nombre:"",
      edad:18,
      series:["This is us", "Breaking Bad", "The Walking Dead", "Ozark", "La casa de papel", "Game Of Thrones"]
    }
  }
}
</script>
