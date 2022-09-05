import Cookies from 'js-cookie'

const TokenKey = 'token'
const WechatId = 'wechatId'

// TOKEN
export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}

// 微信用户ID
export function getWechatId() {
    return Cookies.get(WechatId)
}

export function setWechatId(wechatId) {
    return Cookies.set(WechatId, wechatId)
}

export function removeWechatId() {
    return Cookies.remove(WechatId)
}
