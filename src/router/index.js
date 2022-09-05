import {createRouter, createWebHistory} from 'vue-router'
import {constantRoutes} from "./router";
import {getToken} from "../utils/auth.js";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: constantRoutes
})

router.beforeEach((to, from, next) => {
    // 修改标题名称
    window.document.title = to.meta.title ? to.meta.title : '网站名'
    if (!isLogin(to, next)) {
        console.log('login...')
        window.location.href = '/login'
    }

    next()
})

function isLogin(to, next) {
    if (to.meta.auth !== true) {
        if (!getToken()){
            return false
        }
    }
    return true
}

export default router
