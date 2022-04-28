import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue';
import welcome from '../views/welcome.vue';

import Editar from '../views/Editar.vue';
import Nuevo from '../views/Nuevo.vue';
 // componentes para tipo de material

import MostrarMaterial from'../views/material/Mostrar.vue';
import CrearMaterial from '../views/material/Crear.vue';
import EditarMaterial from'../views/material/Editar.vue';
import Usuario from'../views/Usuario.vue';



import CrearEditorial from '../views/Editorial/Crear.vue';
import EditarEditorial from '../views/Editorial/Editar';
import MostrarEditorial from '../views/Editorial/Mostrar.vue';

//para usuarios
import Usuarios from'../views/usuarios/usuarios.vue';
import Unuevo from'../views/usuarios/unuevo.vue';
import ActualizarUsuarios from'../views/usuarios/actualizarUsuario.vue';

//para nivel educativo

import CrearNivelEdicativo from '../views/NivelEducation/Crear.vue';
import EditarNivelEdicativo from '../views/NivelEducation/Editar.vue';
import MostrarNivelEdicativo from '../views/NivelEducation/Mostrar.vue';

//para autores

import CrearAutor from '../views/Autores/Crear.vue';
import EditarAutor from '../views/Autores/Editar.vue';
import MostrarAutor from '../views/Autores/Mostrar.vue';

import Library from '../views/Library.vue';
 
Vue.use(VueRouter)

const routes = [
  {
    path:'/usuarios',
    name:'/usuarios',
    component: Usuarios
  },
  {
    path:'/actualizarusuarios',
    name:'/actualizarusuarios',
    component: ActualizarUsuarios
  },
  {
    path:'/unuevo',
    name:'/unuevo',
    component: Unuevo
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: welcome
  },
  {
    path: '/Library',
    name: 'Library',
    component: Library
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: Editar
  },
  {
    path: '/nuevo',
    name: 'Nuevo',
    component: Nuevo
  },
{
  name: 'CrearEditorial',
  path: '/CrearEdit',
  component: CrearEditorial
},
{
name: 'EditarEditorial',
path: '/Editar/:id',
component: EditarEditorial
},
{

    name: 'editarMaterial',
    path: '/editar/:id',
    component: EditarMaterial
},
{
  path: '/Usuario',
  name: 'Usuario',
  component: Usuario
},
{
name: 'MostrarEditorial',
path: '/Editorial',
component: MostrarEditorial
},
{
  name: 'CrearNivelEducativo',
  path: '/CrearNivelEducativo',
  component: CrearNivelEdicativo
},
{
name: 'EditarNivelEducativo',
path: '/Editar/:id',
component: EditarNivelEdicativo
},
{
name: 'MostrarNivelEducativo',
path: '/NivelEducativo',
component: MostrarNivelEdicativo

},
{
name: 'MostrarAutor',
path: '/Autor',
component: MostrarAutor
},
{
  name: 'CrearAutor',
  path: '/CrearAutor',
  component: CrearAutor
},
{
name: 'EditarAutor',
path: '/Editar/:id',
component: EditarAutor
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

