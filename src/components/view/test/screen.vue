<template>
  <div class="screen">
    <span @click="requestFullScreen()" class="btn">requestFullScreen</span>
    <span @click="exitFullScreen()" class="btn">exitFullScreen</span>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';

  export default {
    name: 'screen',
    created () {
      this.setHeader();
    },
    mounted () {
      // document.addEventListener('fullscreenchange', function (e) {
      //   console.log('进入/退出全屏模式切换时触发');
      //   console.log('fullscreenchange', e);
      // });
    },
    methods: {
      ...mapMutations(['SET_HEADER']),
      setHeader () {
        this.SET_HEADER('screen');
      },
      // 进入全屏
      requestFullScreen () {
        var ele = document.documentElement;
        if (ele.requestFullscreen) {
          ele.requestFullscreen();
        } else if (ele.mozRequestFullScreen) {
          ele.mozRequestFullScreen();
        } else if (ele.webkitRequestFullscreen) {
          ele.webkitRequestFullScreen();
        }
        setTimeout(() => {
          this.fullScreenEnable();
        }, 100);
      },
      // 退出全屏
      exitFullScreen () {
        var ele = document;
        if (ele.exitFullScreen) {
          ele.exitFullScreen();
        } else if (ele.mozCancelFullScreen) {
          ele.mozCancelFullScreen();
        } else if (ele.webkitCancelFullScreen) {
          ele.webkitCancelFullScreen();
        }
        setTimeout(() => {
          this.fullScreenEnable();
        }, 100);
      },
      fullScreenEnable () {
        // 处于全屏模式中的Element节点， 如果没有处于全屏模式，则返回null。
        var isFullScreen = document.fullscreenElement;
        // console.log(isFullScreen);
        if (isFullScreen) {
          console.log('进入--> 全屏模式');
        } else {
          console.log('退出--> 全屏模式');
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  .btn {
    display: inline-block;
    padding: .125rem .25rem;
    border: 1px solid #ccc;
    border-radius: .125rem;
    color: #4fc08d;
    cursor: pointer;
  }
  .screen {
    padding: 12px;
  }
</style>
