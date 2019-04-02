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
      // meta: { title: "首页" },

      children:[
        {
          path: '/info',
          name: 'info',
          component: info,
          meta: { title: "账号管理" }

        },
        {
          path: '/permission',
          name: 'permission',
          component: permission,
          meta: { title: "身份认证" }

        },
        {
          path: '/upload',
          name: 'upload',
          component: upload,
          meta: { title: "上传图片" }

        },
        {
          path: '/userRoot',
          name: 'userRoot',
          component:userRoot,
          meta: { title: "账号权限" }

        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      meta: { title: "关于" },

      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    
  ]
})
