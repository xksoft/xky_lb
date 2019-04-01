import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
// import info from '@/components/user/info'

const info = () => import('@/components/user/info')
const permission = () => import('@/components/user/permission')
const upload = () => import('@/components/upload/uploadImg')
const userRoot = () => import('@/components/user/userRoot')
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: 'info'
    // },
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/info',
          name: 'info',
          component: info
        },
        {
          path: '/permission',
          name: 'permission',
          component: permission
        },
        {
          path: '/upload',
          name: 'upload',
          component: upload
        },
        {
          path: '/userRoot',
          name: 'userRoot',
          component:userRoot
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
     
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    
  ]
})
