/*
 * @Author: your name
 * @Date: 2021-09-03 00:17:31
 * @LastEditTime: 2021-09-07 17:29:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscodeworkspace\musicdemo\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user.js'

import createPersistedState from "vuex-persistedstate"


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
  },
  mutations: {

    //改变登录状态
    loginState(state,val) {
      state.isLogin = val
    }
  },
  actions: {
  },
  modules: {
    //用户模块
    user,
  },

  plugins: [createPersistedState()]
})
