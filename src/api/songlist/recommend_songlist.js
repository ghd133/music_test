/*
 * @Author: your name
 * @Date: 2021-09-08 17:25:25
 * @LastEditTime: 2021-09-08 17:28:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscodeworkspace\musicdemo\src\api\songlist\recommend_songlist.js
 */
// 获取推荐歌单
import ax from '@/network/request.js'
export default function (cookie) {
    return ax.get(
        '/recommend/resource', {
        params: {
           cookie
        }
    })
}