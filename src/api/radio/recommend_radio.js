import ax from '@/network/request.js'
export default function (cookie) {
    return ax.get(
        '/personalized', {
        params: {
           cookie
        }
    })
}