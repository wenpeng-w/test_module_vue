<template>
<div class="print-text">
  <p></p>
  <span class="cursor"></span>
</div>
</template>

<script>
  import { mapMutations } from 'vuex';
  export default {
    name: 'promise',
    computed: {
      promiseInfo () {
        return false;
      }
    },
    created () {
      this.setHeader();
    },
    methods: {
      ...mapMutations(['SET_HEADER']),
      setHeader () {
        this.SET_HEADER('PROMISE');
      },
      printText (resolve, reject) {
        setTimeout(function () {
          console.log('2');
          console.log(resolve);
          console.log(reject);
        }, 1000);
      }
    }
  };
</script>

<style lang="less" scoped>
  .text {
    font-size: 0.4rem;
    font-weight: 200;
    color: #aaa;
  }
  .cursor {
    height: 0.44rem;
    border-right: 0.02rem solid #ccc;
    vertical-align: text-bottom;
    animation: flashing 1s infinite steps(1, end);
    transform: translate3d(0, 0, 0);
  }
  @keyframes flashing {
    50% {
      opacity: 0;
    }
  }
</style>
