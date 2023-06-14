<script>
import {mapState} from 'vuex';

export default {
    name: 'SphAbout',
    computed: {
        ...mapState(['count']),
    },
    methods: {
        add() {
            // 派发action
            this.$store.dispatch('add');
        },
    },
};
</script>

<template>
  <div>
    <button @click="add"> n + 1</button>
    <span>当前n: {{ count }}</span>
    <button>n - 1</button>
  </div>
</template>

<style scoped lang="less">

</style>