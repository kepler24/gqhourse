import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pics from '../views/Pics.vue'
import Docs from '../views/Docs.vue'
import Videos from '../views/Videos.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title:"高奇的个人小站",
      content: 'disable'
     }
  },
  {
    path: '/pics',
    name: 'pics',
    component: Pics,
    meta: {
      title:"照片",
      content: 'disable'
     }
  },
  {
    path: '/docs',
    name: 'docs',
    component: Docs,
    meta: {
      title:"日志",
      content: 'disable'
     }
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail,
    meta: {
      title:"日志详情",
      content: 'disable'
     }
  },
  {
    path: '/videos',
    name: 'videos',
    component: Videos,
    meta: {
      title:"视频",
      content: 'disable'
     }
  },
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
