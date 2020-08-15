import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/menu',
            component: () => import('./views/Menu.vue')
        },
        {
            path: '/game',
            name: 'game',
            props: true,
            component: () => import('./views/Game.vue')
        }
    ]
})