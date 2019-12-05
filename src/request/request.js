import wepy from 'wepy'
const baseUrl = 'https://app.gushiwen.cn'

export default function (params) {
    if (!params.baseUrl) {
        params.baseUrl = baseUrl
    } 
    params.url = params.baseUrl + params.url
    console.log(params.url)
    return wepy.request(params)
}