<template>
  <div class="SVG-container">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px">
      <g>
        <polygon class="color-hover" points="23,32,53,32,42,14,43,53"></polygon>
      </g>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'svg',
    data () {
      return {
        svgPath: []
      };
    },
    methods: {}
  };
</script>

<style lang="less" scoped>
  .color-hover {
    fill: #fff;
    transition: fill .3s ease-in-out;
    &:hover {
      fill: #4fc08d;
    }
  }
</style>
