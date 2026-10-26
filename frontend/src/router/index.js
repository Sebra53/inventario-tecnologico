import { createRouter, createWebHistory } from 'vue-router'
import EquiposView from '../views/EquiposView.vue'
import NuevoEquipoView from '../views/NuevoEquipoView.vue'
import EquipoDetalleView from '../views/EquipoDetalleView.vue'
 
const routes = [
  { path: '/', redirect: '/equipos' },
  { path: '/equipos', component: EquiposView },
  { path: '/equipos/nuevo', component: NuevoEquipoView },
  { path: '/equipos/:id', component: EquipoDetalleView },
  { path: '/:pathMatch(.*)*', redirect: '/equipos' },
]
 
export default createRouter({
  history: createWebHistory(),
  routes,
})

