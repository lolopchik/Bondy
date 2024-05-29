import { createRouter, createWebHistory } from 'vue-router'


// Компоненты страниц
import main from './views/main.vue'
import top from './views/top.vue';
import akkaynt from './views/akkaynt.vue';
import magazin from './views/magazin.vue';
import register from './views/register.vue';
import login from './views/login.vue'


export default createRouter({
    // История переходов сохраняется
    history: createWebHistory(),


    // Роуты и компоненты
    routes: [
        {
            path: '/',
            name: 'main',
            component: main,
        },
        {
            path: '/top',
            name: 'top',
            component: top,
        },
        {
            path: '/magazin',
            name: 'magazin',
            component: magazin,
        },
        {
            path: '/akkaynt',
            name: 'akkaynt',
            component: akkaynt,
        },
        {
            path: '/register',
            name: 'register',
            component: register,
        },
        {
            path: '/login',
            name: 'login',
            component: login,
        },
    ]
})