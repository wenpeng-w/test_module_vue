<template>
  <div class="draw-container">
    <div class="draw">
      <div class="H-top"></div>
      <div class="H-header">

      </div>
      <div class="H-body_1">

      </div>
      <div class="H-body_2">

      </div>
      <div class="H-footer">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'draw'
  };
</script>

<style lang="less" scoped>
  .draw-container {
    /*padding: 12px;*/
  }

  .draw {
    position: relative;
    text-align: center;
  }

  .H-top {
    width: 2px;
    height: 2px;
    margin: 0 auto;
    border: 1px solid #858585;
    border-radius: 2px;
  }

  .H-header {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    /*border: 1px solid #858585;*/
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
  }

  .H-body_1 {
    width: 40px;
    height: 100px;
    border: 1px solid #858585;
  }
  .H-body_2 {
  }
</style>
