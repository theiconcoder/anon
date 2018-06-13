import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/read'
    },
    {
      path: '/read',
      name: 'read',
      component: () => import('../views/Read.vue')
    },
    {
      path: '/post',
      name: 'post',
      component: () => import('../views/Post.vue')
    },
    {
      path: '/address-center',
      name: 'address-center',
      component: () => import('../views/AddressCenter.vue')
    },
    {
      path: '*',
      redirect: '/read'
    }
  ]
})
