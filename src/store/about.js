const state = {
    count: 1,
};
// mutation：修改state的唯一方式
const mutations = {};
// action：处理action， 可以书写业务逻辑，也可以处理异步
const actions = {
    add() {
        this.state.count++;
    },
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters,
};