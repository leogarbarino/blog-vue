import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import LastArticlesComponent from './components/LastArticlesComponent.vue'
import MiComponente from './components/MiComponente.vue'
import HelloWorld from './components/HelloWorld.vue'
import BlogComponent from './components/BlogComponent.vue'
import FormularioComponent from './components/FormularioComponent.vue'
import PaginaComponent from './components/PaginaComponent.vue'
import ErrorComponent from './components/ErrorComponent.vue'
import PeliculasComponent from './components/PeliculasComponent.vue'
import SearchComponent from './components/SearchComponent.vue'
import RedirectComponent from './components/RedirectComponent.vue'
import ArticleComponent from './components/ArticleComponent.vue'
import CreateArticleComponent from './components/CreateArticleComponent.vue'
import EditArticleComponent from './components/EditArticleComponent.vue'







// Creación de rutas

const routes= [
   {path: "/home", component: LastArticlesComponent},
   {path: "/blog", component: BlogComponent},
   {path: "/articulo/:id", name: 'article', component: ArticleComponent},
   {path: "/editar/:id", name: 'edit', component: EditArticleComponent},
   {path: "/crear-articulo", name: 'create', component: CreateArticleComponent},
   {path: "/formulario", component: FormularioComponent},
   {path: "/pagina/:id?", name:"pagina", component: PaginaComponent},
   {path: "/peliculas", name: "peliculas", component: PeliculasComponent},
   {path: "/ultimos-articulos", component: LastArticlesComponent},
   {path: "/buscador/:searchString", component: SearchComponent},
   {path: "/redirect/:searchString", component: RedirectComponent},
   {path: "/mi-componente", component: MiComponente},
   {path: "/hola-mundo", component: HelloWorld},
   {path: "/", component: LastArticlesComponent},
   {path: "/:catchAll(.*)", component: ErrorComponent}
   
  
];

// Configuracion del router

const router= createRouter({
  history: createWebHistory(),
  routes,

});

const app= createApp(App);


app.use(router);
app.mount("#app");


