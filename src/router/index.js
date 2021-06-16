import Vue from 'vue'
import VueRouter from 'vue-router'

// import Film from '../views/Film.vue'

Vue.use(VueRouter)

const routes = [
    // 重定向
    {
        path: '*',
        redirect: '/film'
    },
    {
        path: '/film',
        component: () => import('@/views/Film.vue'),//路由懒加载
        // 嵌套路由
        children: [
            {
                path: 'nowplaying',
                component: () => import('@/views/film/Nowplaying.vue')
            },
            {
                path: '/film/comingsoon',
                component: () => import('@/views/film/Comingsoon.vue')
            },
            {
                path: '',
                redirect: '/film/nowplaying'
            }
        ]
    },
    // {
    //     path:'/detail/:myid',//动态路由
    //     component:Detail,
    //     name:'kerwinDetail'
    // },
    {
        path: '/detail',
        component: () => import('@/views/Detail.vue'),
    },
    {
        path: '/center',
        component: () => import('@/views/Center.vue')
    },
    {
        path: '/cinema',
        component: () => import('@/views/Cinema.vue')
    },
    {
        path: '/cinema/search',
        component: () => import('@/views/Search.vue')
    },
    {
        path: '/login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/city',
        component: () => import('@/views/City.vue')
    },
]

const router = new VueRouter({
    //路由模式 
    // a.hash     #/home  
    // b.history  /home
    mode: 'hash',
    routes
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
    const auth = ['/center', '/order']
    if (auth.includes(to.fullPath)) {
        // 拦截
        if (!localStorage.getItem('token')) {
            next('/login')
        } else {
            // 放行
            next()
        }
    } else {
        next()
    }
})

export default router