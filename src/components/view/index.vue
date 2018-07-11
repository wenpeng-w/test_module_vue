<template>
  <div class="main">
    首页
  </div>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex';

  export default {
    name: 'index',
    data () {
      return {};
    },
    created () {
      this.setHeader();
    },
    beforeRouteLeave (to, from, next) {
      // 当前路由变化，且该组件被复调用时执行
      next();
    },
    computed: {
      ...mapGetters([
        'userInfo'
      ])
    },
    methods: {
      ...mapMutations(['SET_HEADER']),
      setHeader () {
        this.SET_HEADER('首页');
      }
    }
  };
</script>

<style lang="less" scoped>
  .van-button {
    display: block;
  }
</style>
