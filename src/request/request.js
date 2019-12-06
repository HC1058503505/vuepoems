import wepy from 'wepy'
const baseUrl = 'https://app.gushiwen.cn'

export default function (params) {
    if (!params.baseUrl) {
        params.baseUrl = baseUrl
    } 
    
    if (!params.data.token) {
        params.data.token = 'gswapi'
    }

    params.url = params.baseUrl + params.url
    return wepy.request(params)
}