<template>
  <div class="animation-container">
    <van-button class="btn" @click="openPopup('left')" size="small">左边进入</van-button>
    <van-button class="btn" @click="openPopup('right')" size="small">右边进入</van-button>
    <van-button class="btn" @click="openPopup('top')" size="small">顶部进入</van-button>
    <van-button class="btn" @click="openPopup('bottom')" size="small">底部进入</van-button>
    <transition class="btn" name="enter-left">
      <div v-if="showLeft" class="animation-text ani-left"></div>
    </transition>
    <transition name="enter-right">
      <div v-if="showRight" class="animation-text ani-right"></div>
    </transition>
    <transition name="enter-top">
      <div v-if="showTop" class="animation-text ani-top"></div>
    </transition>
    <transition name="enter-bottom">
      <div v-if="showBottom" class="animation-text ani-bottom"></div>
    </transition>

    <!--<div class="btn-active">点击态按钮</div>-->
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
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
    created () {
      this.setHeader();
    },
    methods: {
      ...mapMutations(['SET_HEADER']),
      setHeader () {
        this.SET_HEADER('POPUP');
      },
      /**
       * 弹出框
       * @param {String} direction 弹出方向
       */
      openPopup (direction) {
        if (direction === 'left') this.showLeft = !this.showLeft;
        else if (direction === 'right') this.showRight = !this.showRight;
        else if (direction === 'top') this.showTop = !this.showTop;
        else if (direction === 'bottom') this.showBottom = !this.showBottom;
      }
    }
  };
</script>

<style lang="less" scoped>
  .btn {
    margin: 0 0.1rem 0.2rem 0;
    &:active {
      background-color: rgba(79, 192, 141, .2);
    }
  }
  .animation-text {
    background-color: #ccc;
    width: 50%;
    height: 2rem;
    position: fixed;
  }
  .ani-left {
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
  .ani-right {
    top: 50%;
    right: 50%;
    transform: translate3d(50%, -50%, 0);
  }
  .ani-top {
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
  .ani-bottom {
    bottom: 50%;
    left: 50%;
    transform: translate3d(-50%, 50%, 0);
  }

  /**
   * 可以不设置 enter-right-enter-to 和 enter-right-leave 类
   * *-enter-to 进入过度的结束状态
   * *-leave 离开过度的开始状态
   */

  // 左边进入
  .enter-left-enter-active, .enter-left-leave-active { transition: all .6s ease-in-out; }
  .enter-left-enter-to, .enter-left-leave { left: 50%; opacity: 1; }
  .enter-left-enter, .enter-left-leave-to { left: -100%; opacity: 0; }

   // 右边进入
  .enter-right-enter-active, .enter-right-leave-active { transition: all .6s ease-in-out; }
  .enter-right-enter-to, .enter-right-leave { right: 50%; opacity: 1; }
  .enter-right-enter, .enter-right-leave-to { right: -100%; opacity: 0; }

  // 顶部进入
  .enter-top-enter-active, .enter-top-leave-active { transition: all .6s ease-in-out; }
  .enter-top-enter-to, .enter-top-leave { top: 50%; opacity: 1; }
  .enter-top-enter, .enter-top-leave-to { top: -100%; opacity: 0; }

  // 底部进入
  .enter-bottom-enter-active, .enter-bottom-leave-active { transition: all .6s ease-in-out; }
  .enter-bottom-enter-to, .enter-bottom-leave { bottom: 50%; opacity: 1; }
  .enter-bottom-enter, .enter-bottom-leave-to { bottom: -100%; opacity: 0; }

  .btn-active {
    display: inline-block;
    height: 34px;
    line-height: 34px;
    padding: 0 10px;
    font-size: 14px;
    color: #333333;
    &:active {
      background-color: rgba(0, 0, 0, .45);
      transition-property: background-color;
      transition-delay: 0.02s;
    }
  }
</style>
