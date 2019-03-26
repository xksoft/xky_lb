import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
// import info from '@/components/user/info'

const info = () => import('@/components/user/info')
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: 'home'
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
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
     
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    
  ]
})
