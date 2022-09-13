import Vue from 'vue'
import VueRouter from 'vue-router'
import Crud from '../views/Crud.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'todoapp',
    component: Crud
  },
 
]

const router = new VueRouter({
  routes
})

export default router
