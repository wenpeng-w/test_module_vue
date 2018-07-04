<template>
  <div class="service-page">
    服务页面
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    name: 'service',
    created () {
      this.setHeader();
    },
    methods: {
      ...mapMutations(['SET_HEADER']),
      setHeader () {
        this.SET_HEADER('服务');
      }
    }
  };
</script>

<style lang="less" scoped>

</style>
