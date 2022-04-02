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
    name: 'MostrarMaterial',
    path: '/material',
    component: MostrarMaterial
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
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

