/*
 * @Author: your name
 * @Date: 2021-09-08 17:31:20
 * @LastEditTime: 2021-09-08 17:32:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscodeworkspace\musicdemo\src\api\user\userDetail.js
 */
//获取用户详情

import ax from '@/network/request.js'
export default function (uid) {
    return ax.get(
        '/user/detail', {
        params: {
           uid
        }
    })
}