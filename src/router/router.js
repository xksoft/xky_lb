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
const topic_settop = () => import('@/components/topic/topic_settop')
const topic_verify = () => import('@/components/topic/topic_verify')


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
          meta: { title: "账号管理" }
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
        {
          path: '/topic_verify',
          name: 'topic_verify',
          component: topic_verify,
          meta: { title: "帖子审核" },
        },
        {
          path: '/topic_settop',
          name: 'topic_settop',
          component: topic_settop,
          meta: { title: "全部帖子" },
        },
      
      ]
    },
    // {
    //   path: '/topic',
    //   name: 'topic',
    //   meta: { title: "帖子管理" },
     
    //   children:[
    //     {
    //       path: '/topic/topic_verify',
    //       name: 'topic_verify',
    //       component: topic_verify,
    //       meta: { title: "帖子审核" },
    //     },
    //     {
    //       path: '/topic/topic_settop',
    //       name: 'topic_settop',
    //       component: topic_settop,
    //       meta: { title: "全部帖子" },
    //     },
    //   ]
      
    // },
    {
      path: '/about',
      name: 'about',
      meta: { title: "关于" },

      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    
  ]
})
