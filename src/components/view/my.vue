<template>
  <div class="my-page">
    我的页面{{userInfo.name}}{{userInfo.age}}{{userInfo.job}}
  </div>
</template>

<script>
  import { mapMutations, mapGetters, mapActions } from 'vuex';

  export default {
    name: 'my',
    created () {
      this.setHeader();
    },
    computed: {
      ...mapGetters([
        'userInfo'
      ])
    },
    methods: {
      ...mapMutations(['SET_HEADER']),
      ...mapActions(['SET_USER']),
      setHeader () {
        this.SET_HEADER('我的');
        this.SET_USER({name: 'vuex', age: 18, job: 'Front-end engineer'});
      }
    }
  };
</script>

<style lang="less" scoped>

</style>
