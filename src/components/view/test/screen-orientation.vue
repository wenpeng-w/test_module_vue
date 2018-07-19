<template>
  <div ref="screen" class="screen-orientation">
    <div class="chart-container">
      <h3>{{ orientation }}展示效果</h3>
      <span>width: {{ width }};</span>
      <span>height: {{ height }};</span>
      <echart></echart>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  import echart from './echarts';
  export default {
    name: 'screen-orientation',
    data () {
      return {
        orientation: '',
        width: 0,
        height: 0
      };
    },
    created () {
      this.setHeader();
    },
    mounted () {
      this.turnScreen();
      window.onorientationchange = () => {
        let _width = this.$refs.screen.clientWidth;
        let _height = this.$refs.screen.clientHeight;
        if (window.orientation === 90 || window.orientation === -90) {
          this.orientation = '横屏';
          this.width = this.$refs.screen.style.width = _width + 'px';
          this.height = this.$refs.screen.style.height = _height + 'px';
          this.$refs.screen.style.left = 0;
          this.$refs.screen.style.top = 0;
          this.$refs.screen.style.transform = 'none';
        } else {
          this.orientation = '竖屏';
          this.width = this.$refs.screen.style.width = _width + 'px';
          this.height = this.$refs.screen.style.height = _height + 'px';
          this.$refs.screen.style.left = (_height - _width) / 2 + 'px';
          this.$refs.screen.style.top = -(_height - _width) / 2 + 'px';
          this.$refs.screen.style.transform = 'rotate(90deg)';
        }
      };
    },
    methods: {
      ...mapMutations(['SET_HEADER']),
      setHeader () {
        this.SET_HEADER('SCREEN-ORIENTATION');
      },
      turnScreen () {
        let _width = this.$refs.screen.clientWidth;
        let _height = this.$refs.screen.clientHeight;
        if (_width > _height) {
          this.width = this.$refs.screen.style.width = _width + 'px';
          this.height = this.$refs.screen.style.height = _height + 'px';
          this.$refs.screen.style.left = 0;
          this.$refs.screen.style.top = 0;
          this.$refs.screen.style.transform = 'none';
        } else {
          this.width = this.$refs.screen.style.width = _height + 'px';
          this.height = this.$refs.screen.style.height = _width + 'px';
          this.$refs.screen.style.left = -(_height - _width) / 2 + 'px';
          this.$refs.screen.style.top = (_height - _width) / 2 + 'px';
          this.$refs.screen.style.transform = 'rotate(90deg)';
        }
      }
    },
    components: {
      echart
    }
  };
</script>

<style lang="less" scoped>
.screen-orientation {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  .chart-container {
    width: 100%;
    height: 100%;
  }
}
</style>
