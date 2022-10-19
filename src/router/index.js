import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import 'animate.css';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/universos',
    name: 'universos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UniversoView.vue')
  },
  {
    path: '/universos/:id',
    name: 'verUniverso',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VerUniverso.vue')
  },
  {
    path: '/universos/crear',
    name: 'crearUniverso',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CrearUniverso.vue')
  },
  {
    path: '/universos/:id/editar',
    name: 'editarUniverso',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EditarUniverso.vue')
  },
  {
    path: '/heroes',
    name: 'heroes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HeroeView.vue')
  },
  {
    path: '/heroes/:id',
    name: 'verHeroe',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VerHeroes.vue')
  },
  {
    path: '/heroes/crear',
    name: 'crearHeroe',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CrearHeroe.vue')
  },
  {
    path: '/heroes/:id/editar',
    name: 'editarHeroe',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EditarHeroe.vue')
  },
  {
    path: '/heroes/buscar?:name',
    name: 'buscarHeroe',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BuscarHeroe.vue')
  },
  {
    path: '/universos/buscar?:name',
    name: 'buscarUniverso',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BuscarUniverso.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
