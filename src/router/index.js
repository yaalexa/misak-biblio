import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue';

import Editar from '../views/Editar.vue';
import Nuevo from '../views/Nuevo.vue';
 // componentes para tipo de material
import MostrarMaterial from'../views/material/Mostrar.vue';
import CrearMaterial from '../views/material/Crear.vue';
import EditarMaterial from'../views/material/Editar.vue';
import Rol from '../views/Rol.vue';
import Rol2 from '../views/Rol2.vue';
import Mostrar from '../views/Rol/Mostrar.vue';
import EditarRol from '../views/Rol/EditarRol.vue';
import CrearRol from '../views/Rol/CrearRol.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    name: 'Mostrar',
    path: '/mostrar',
    component: Mostrar
},
{
    name: 'crearMaterial',
    path: '/crear',
    component: CrearMaterial
},
{
    name: 'editarMaterial',
    path: '/editar/:id',
    component: EditarMaterial
},
{
  path: '/rol',
  name: 'rol',
  component: Rol
},
{
  name: 'MostrarRol',
  path: '/',
  component: MostrarMaterial
},
{
  path: '/editarrol/:id',
  name: 'EditarRol',
  component: EditarRol
},
{
  path: '/crearrol',
  name: 'CrearRol',
  component: CrearRol
},
{
  path: '/rol2',
  name: 'rol2',
  component: Rol2
}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

