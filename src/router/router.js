import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
// import info from '@/components/user/info'

const info = () => import('@/components/user/info')
const permission = () => import('@/components/user/permission')
const upload = () => import('@/components/upload/uploadImg')
const userRoot = () => import('@/components/user/userRoot')
const email = () => import('@/components/user/bindnew/email')
const phone = () => import('@/components/user/bindnew/phone')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'info'
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: "个人中心" },
      children:[
        {
          path: '/info',
          name: 'info',
          component: info,
          meta: { title: "账号管理" },
          // children:[
          //   {
          //     path: '/info/email',
          //     name: 'email',
          //     component: email,
          //     meta: { title: "绑定邮箱" },
          //   }
          // ]
        },
        {
          path: '/info/email',
          name: 'email',
          component: email,
          meta: { title: "账号管理 / 修改邮箱" }
        },
        {
          path: '/info/phone',
          name: 'phone',
          component: phone,
          meta: { title: "账号管理 / 修改手机" }
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
