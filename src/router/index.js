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

import CrearEditorial from '../views/Editorial/Crear.vue';
import EditarEditorial from '../views/Editorial/Editar';
import MostrarEditorial from '../views/Editorial/Mostrar.vue';

import CrearNivelEdicativo from '../views/NivelEducation/Crear.vue';
import EditarNivelEdicativo from '../views/NivelEducation/Editar';
import MostrarNivelEdicativo from '../views/NivelEducation/Mostrar.vue';

import Reportes from '../views/reportes/vista.vue';
import ReportesDescargas from '../views/reportes/Descargas.vue';
import ReportesVisualizacion from '../views/reportes/Visualizacion.vue';

import Bar from '@/components/charts/Bar.vue';
import LineChartGenerator from '@/components/charts/Line.vue';
import Doughnut from '@/components/charts/Doughnut.vue';

import Casa from '../views/home/Casa.vue';


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
  name: 'VistaReporte',
  path: '/vistaReporte',
  component: Reportes
},
{
  name: 'Descargas',
  path: '/Descargas',
  component: ReportesDescargas
},
{
  name: 'Visualizacion',
  path: '/Visualizacion',
  component: ReportesVisualizacion
},
{
  name: 'Grafica',
  path: '/Grafica',
  component: Bar
},
{
  name:'GraficaLinea',
  path: '/GraficaLinea',
  component: LineChartGenerator
},
{
  name:'Doughnut',
  path: '/Doughnut',
  component: Doughnut
},
{
  name:'Casa',
  path:'/Casa',
  component: Casa
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

