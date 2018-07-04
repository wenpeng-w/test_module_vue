<template>
  <div class="motorcade-page">
    车队页面
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    name: 'motorcade',
    created () {
      this.setHeader();
    },
    methods: {
      ...mapMutations(['SET_HEADER']),
      setHeader () {
        this.SET_HEADER('车队');
      }
    }
  };
</script>

<style lang="less" scoped>

</style>
