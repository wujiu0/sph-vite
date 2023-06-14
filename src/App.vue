<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
    name: 'App',
    components: {TheFooter, TheHeader},
    methods: {},
    mounted() {
        this.$store.dispatch('getCategoryList');
    },
};
</script>

<template>
  <div>
    <the-header></the-header>
    <!--    路由出口-->
    <router-view></router-view>
    <the-footer v-show="!$route.meta.disabledFooter"></the-footer>
  </div>
</template>

<style scoped>

</style>
