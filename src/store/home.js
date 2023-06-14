import {reqCategoryList, reqGetBannerList} from '@/api';

const state = {
    categoryList: [],
    bannerList: [],
};
const mutations = {
    GET_CATEGORY_LIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GET_BANNER_LIST(state, bannerList) {
        state.bannerList = bannerList;
    },

};
const actions = {

    async getCategoryList(context) {
        let result = await reqCategoryList();
        // console.log(result);
        if (result.code === 200) {
            context.commit('GET_CATEGORY_LIST', result.data);
        }

    },
    async getBannerList(context) {
        const result = await reqGetBannerList();
        // console.log(result);
        if (result.code === 200) {
            context.commit('GET_BANNER_LIST', result.data);
        }

    },
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters,
};