/*
 * @Author: your name
 * @Date: 2021-09-07 11:50:38
 * @LastEditTime: 2021-09-07 12:39:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscodeworkspace\musicdemo\src\api\loginAPI.js
 */

import ax from '@/network/request.js'
export default function (config) {
    return ax.get(
        '/login/cellphone', {
        params: {
            phone: config.phone,
            password: config.password
        }
    })
}
