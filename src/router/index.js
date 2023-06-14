import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home/Home.vue';
import Login from '@/views/Login/Login.vue';
import Register from '@/views/Register/Register.vue';
import About from '@/views/About/About.vue';
import Search from '@/views/Search/Search.vue';


Vue.use(VueRouter);
const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (to, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, to, resolve, reject);
    } else {
        originPush.call(this, to, () => {
        }, () => {
        });
    }
};
VueRouter.prototype.replace = function (to, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, to, resolve, reject);
    } else {
        originReplace.call(this, to, () => {
        }, () => {
        });
    }

};

const router = new VueRouter({
    mode: 'hash',
    base: import.meta.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
        },
        {
            path: '/login',
            component: Login,
            meta: {
                disabledFooter: true,
            },
        },
        {
            path: '/register',
            component: Register,
            meta: {
                disabledFooter: true,
            },
        },
        {
            path: '/about',
            component: About,
        },
        {
            name: 'search',
            path: '/search/:keywords?',
            component: Search,
            props($route) {
                return {keywords: $route.params, k: $route.query};
            },
        },
    ],
});

export default router;
