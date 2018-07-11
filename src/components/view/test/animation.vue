<template>
  <div class="animation-container">
    <van-button class="btn" @click="toggleEnterLeft" size="small">左边进入</van-button>
    <van-button class="btn" @click="toggleEnterRight" size="small">右边进入</van-button>
    <van-button class="btn" @click="toggleEnterTop" size="small">顶部进入</van-button>
    <van-button class="btn" @click="toggleEnterBottom" size="small">底部进入</van-button>
    <transition class="btn" name="enter-left">
      <div v-if="showLeft" class="animation-text ani-left"></div>
    </transition>
    <transition name="enter-right">
      <div v-if="showRight" class="animation-text ani-right"></div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'animation',
    data () {
      return {
        showLeft: false,
        showRight: false,
        showTop: false,
        showBottom: false
      };
    },
    methods: {
      toggleEnterLeft () {
        this.showLeft = !this.showLeft;
      },
      toggleEnterRight () {
        this.showRight = !this.showRight;
      },
      toggleEnterTop () {
        this.showTop = !this.showTop;
      },
      toggleEnterBottom () {
        this.showBottom = !this.showBottom;
      }
    }
  };
</script>

<style lang="less" scoped>
  .btn {
    margin: 0 0.1rem;
    &:active {
      background-color: rgba(79, 192, 141, .2);
    }
  }
  .animation-text {
    background-color: #ccc;
    width: 50%;
    height: 2rem;
    position: fixed;
    top: 1rem;
  }
  .ani-left { left: 2%; }
  .ani-right { right: 2%; }

  /**
   * 可以不设置 enter-right-enter-to 和 enter-right-leave 类
   * enter-right-enter-to 进入过度的结束状态
   * enter-right-leave 离开过度的开始状态
   **/

  // 左边进入
  .enter-left-enter-active, .enter-left-leave-active { transition: all .6s ease-in-out; }
  .enter-left-enter-to, .enter-left-leave { left: 2%; opacity: 1; }
  .enter-left-enter, .enter-left-leave-to { left: -100%; opacity: 0; }

   // 右边进入
  .enter-right-enter-active, .enter-right-leave-active { transition: all .6s ease-in-out; }
  .enter-right-enter-to, .enter-right-leave { right: 2%; opacity: 1; }
  .enter-right-enter, .enter-right-leave-to { right: -100%; opacity: 0; }
</style>
