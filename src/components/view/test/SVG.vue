<template>
  <div class="SVG-container">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100px">
      <g>
        <polygon class="color-hover" points="23,32,53,32,42,14,43,53"></polygon>
      </g>
    </svg>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100px">
      <path fill="transparent" stroke="black" d="M 0,100 Q 50,10 180,70 T 380,50 700,90"></path>
      <path fill="transparent" stroke="green" d="M 0,40 Q 90,100 200,60 T 380,80 700,90"></path>
      <path fill="transparent" stroke="blue" d="M 0,40 Q 45,100 187.5,60 T 260,80 375,90"></path>
    </svg>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  export default {
    name: 'svg-component',
    data () {
      return {
        svgPath: []
      };
    },
    created () {
      this.setHeader();
    },
    methods: {
      ...mapMutations(['SET_HEADER']),
      setHeader () {
        this.SET_HEADER('SVG');
      }
    }
  };
</script>

<style lang="less" scoped>
  .SVG-container {
    margin: 0 -0.24rem;
  }
  .color-hover {
    fill: #fff;
    transition: fill .3s ease-in-out;
    &:hover {
      fill: #4fc08d;
    }
  }
</style>
