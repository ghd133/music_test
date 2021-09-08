/*
 * @Author: your name
 * @Date: 2021-08-30 16:23:45
 * @LastEditTime: 2021-09-07 12:38:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscodeworkspace\vuetest\src\network\request.js
 */
import axios from 'axios'
const ax = axios.create({
    baseURL: "https://autumnfish.cn",
    // timeout: 5000,
    // headers: ""
})

// //ax是一个函数，函数执行时返回一个promise

// 拦截器
// 请求拦截
ax.interceptors.request.use(config => {
    // Do something before request is sent
    console.log(config);
    return config;
}, error => {
    // Do something with request error
    return Promise.reject(error);
});


//响应拦截
ax.interceptors.response.use(response => {
    // Do something before response is sent

    return response.data;
}, error => {
    // Do something with response error
    return Promise.reject(error);
});

export default ax