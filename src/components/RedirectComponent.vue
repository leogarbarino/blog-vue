<template>
<h1>Redireccionando...</h1>
</template>

<script>
    export default {
       name:"RedirectComponent",
       mounted() {
         var searchString= this.$route.params.searchString;
         this.$router.push("/buscador/" + searchString);
       }
    }
</script>