<template>
  <!-- 头部导航栏 -->
  <div class="header">
    <div class="tab-bar border-bottom">
      <div class="tab-title">{{ headerTitle }}</div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'tab-bar',
    data () {
      return {};
    },
    computed: {
      ...mapState(['headerTitle'])
    },
    methods: {}
  };
</script>

<style lang="less" scoped>
  .tab-bar {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    &.border-bottom {
       border-bottom: .01rem solid #dedede;
    }
  }
</style>
