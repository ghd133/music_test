/*
 * @Author: your name
 * @Date: 2021-09-02 18:09:45
 * @LastEditTime: 2021-09-08 12:20:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \cloudMusic\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/index',//重定向
  },
  {
    path: '/index',
    // name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: 'recommend',//重定向
      },
      {
        path: 'recommend',
        name: 'recommend',
        component: () => import('@/views/right_nav/recommend.vue'),
        meta: { auth: true }
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
