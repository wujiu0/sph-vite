<script>

import TodayRecommend from '@/views/Home/TodayRecommend.vue';
import ListContainer from '@/views/Home/ListContainer.vue';
import GoodsRank from '@/views/Home/GoodsRank.vue';
import TheBrand from '@/views/Home/TheBrand.vue';
import GoodsFloor from '@/views/Home/GoodsFloor.vue';
import {mapState} from 'vuex';

export default {
    name: 'sph-home',
    components: {GoodsFloor, TheBrand, GoodsRank, TodayRecommend, ListContainer},
    mounted() {
        this.$store.dispatch('getFloorList');
    },
    computed: {
        ...mapState({
            floorList: state => state.home.floorList,
        }),
    },
};
</script>

<template>
  <div>
    <type-nav></type-nav>
    <list-container></list-container>
    <today-recommend></today-recommend>
    <goods-rank></goods-rank>
    <goods-floor v-for="floor in floorList" :key="floor.id" :floor="floor"></goods-floor>
    <the-brand></the-brand>
  </div>
</template>

<style scoped lang="less">

</style>