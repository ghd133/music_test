/*
 * @Author: your name
 * @Date: 2021-09-03 00:17:31
 * @LastEditTime: 2021-09-04 12:28:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscodeworkspace\musicdemo\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './plugins/element.js'

import BScroll from '@better-scroll/core'
import MouseWheel from '@better-scroll/mouse-wheel'
import ScrollBar from '@better-scroll/scroll-bar'

BScroll.use(ScrollBar)
BScroll.use(MouseWheel)
Vue.prototype.BScroll = BScroll
Vue.prototype.MouseWheel = MouseWheel

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
