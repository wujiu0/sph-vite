import {reqGetCategoryList, reqGetBannerList, reqGetFloorList} from '@/api';

const state = {
    categoryList: [],
    bannerList: [],
    floorList: [],
};
const mutations = {
    GET_CATEGORY_LIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GET_BANNER_LIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    GET_FLOOR_LIST(state, floorList) {
        state.floorList = floorList;
    },
};
const actions = {

    async getCategoryList(context) {
        let result = await reqGetCategoryList();
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
    async getFloorList(context) {
        const result = await reqGetFloorList();
        if (result.code === 200) {
            context.commit('GET_FLOOR_LIST', result.data);
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