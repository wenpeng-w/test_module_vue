<template>
  <div>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <span @click="toggleShow()">{{el}}</span>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <p>page</p>
    <div id="scroll" v-show="isShow" class="scroll-page">
      <div class="info">
        <p>scroll0</p>
        <p>scroll1</p>
        <p>scroll2</p>
        <p>scroll3</p>
        <p>scroll4</p>
        <p>scroll5</p>
        <p>scroll6</p>
        <p>scroll7</p>
        <p>scroll8</p>
        <p>scroll9</p>
        <p>scroll10</p>
        <p>scroll11</p>
        <p>scroll12</p>
        <p>scroll13</p>
        <p>scroll14</p>
      </div>
    </div>
    <!--<div v-if="isShow" class="el-mask"></div>-->
  </div>
</template>

<script>
  export default {
    name: 'overscroll',
    data () {
      return {
        el: 'showFixed',
        isShow: false
      };
    },
    created () {
      this.$nextTick(() => {

      });
    },
    methods: {
      overScroll (el) {
        console.log(el.offsetHeight);
        console.log(el.scrollHeight);
        el.addEventListener('touchmove', (e) => {
          if (el.offsetHeight < el.scrollHeight) e.isScroll = true;
        }, { passive: false });
      },
      toggleShow () {
        this.isShow = !this.isShow;
        if (this.isShow) {
          setTimeout(() => {
            var el = document.querySelector('#scroll');
            el && this.overScroll(el);
          }, 300)
          document.body.addEventListener('touchmove', (e) => {
            if (!e.isScroll && this.isShow) {
              console.log(e);
              e.preventDefault();
            }
          }, { passive: false });
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  .scroll-page {
    position: fixed;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translate(0, -50%);
    background-color: #e5e5e5;
    height: 30vh;
    overflow-y: auto;
    z-index: 1001;
  }
  .el-mask {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: rgba(0,0,0,0);
  }
</style>
