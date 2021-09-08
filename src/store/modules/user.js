/*
 * @Author: your name
 * @Date: 2021-09-07 15:56:53
 * @LastEditTime: 2021-09-08 16:18:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscodeworkspace\musicdemo\src\store\modules\user.js
 */
export default {
    namespaced: true,
    state: {
        token: null,
        profile: null,
        account: null,
        cookie: null
    },
    getters: {

    },
    mutations: {
        //设置token
        setToken(state, val) {
            state.token = val
        },

        //设置账户信息
        setAccount(state, val) {
            state.account = val
        },

        //设置用户个人信息
        setProfile(state, val) {
            state.profile = val
        },
        
        //设置cookies
        setCookie(state, val) {
            state.cookie = val
        },

    },
    actions: {

    }
}