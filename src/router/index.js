import { createRouter, createWebHashHistory } from 'vue-router'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Food from '../views/Food.vue'
import About from '../views/About.vue'
import Keranjang from '../views/Keranjang.vue'
import FoodDetail from '../views/FoodDetail.vue'
import Vue from 'vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/food',
    name: 'Food',
    component: Food
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/keranjang',
    name: 'Keranjang',
    component: Keranjang
  },
  {
    path: '/food/:id',
    name: 'FoodDetail',
    component: FoodDetail
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
