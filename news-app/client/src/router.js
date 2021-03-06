import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Dashboard from '@/views/admins/Dashboard.vue'
import Login from '@/views/Login.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/admin',
            name: 'dashboard',
            component: Dashboard
        }
    ]
})