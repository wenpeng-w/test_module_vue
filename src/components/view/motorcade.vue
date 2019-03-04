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
      ...mapMutations(['SET_HEADER', 'SET_USER']),
      setHeader () {
        this.SET_HEADER('车队');
        this.SET_USER({name: 'vuex', age: 20, job: 'Front-end engineer'});
      }
    }
  };
</script>

<style lang="less" scoped>

</style>
