import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeLogin from '@/components/HomeLogin.vue'
import HomeTarefa from '@/components/HomeTarefa.vue'
import UserRegister from '@/components/UserRegister.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: HomeLogin
  },
  {
    path: '/register',
    name: 'register',
    component: UserRegister
  },
  {
    path: '/tarefa',
    name: 'tarefa',
    component: HomeTarefa
  },
  {
    path:  '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
