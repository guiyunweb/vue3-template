import Layout from '../layout/default.vue'

export const constantRoutes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/index.vue',),
        meta: {title: '会员登录', auth: true}
    },
    {
        path: '',
        component: Layout,
        redirect: 'index',
        children: [
            {
                path: 'index',
                component: () => import('../views/home/index.vue'),
                name: '首页',
                meta: {title: '首页',auth: true}
            }
        ]
    },
    {
        path: '/:pathMatch(.*)',
        component: () => import('../views/error/404.vue'),
        meta: {title: '对不起，未找到该网页', auth: true},
        hidden: true
    },
]
