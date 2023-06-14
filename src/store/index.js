import about from '@/store/about';
import home from '@/store/home';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        home,
        about,
    },
});
