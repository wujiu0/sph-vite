import Vue from 'vue';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import TypeNav from '@/components/TypeNav.vue';

// 定义全局组件，在任何组件中都可以使用
Vue.component(TypeNav.name, TypeNav);
// 引入mockServer.js ---mock数据
import '@/mock/mockServer';
// 引入swiper样式
import 'swiper/css/swiper.css';

new Vue({
    render: (h) => h(App),
    // 注册路由器，组件实例身上会多出现$route,$route属性
    router,
    // 注册仓库，组件实例身上会多一个$store属性
    store,
}).$mount('#app');
