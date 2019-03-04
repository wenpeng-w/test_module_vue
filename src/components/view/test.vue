<template>
  <div class="test-demo-list">
    <span @click="demoLink(item.title)" v-for="(item, index) in demoList" :key="index" class="demo-item hover-bg-black-10 hover-black">{{item.title}}</span>
  </div>

</template>

<script>
  import { mapMutations } from 'vuex';
  export default {
    name: 'motorcade',
    data () {
      return {
        demoList: [
          {title: 'vue-xlsx-table'},
          {title: 'amap'},
          {title: 'echarts'},
          {title: 'screen-orientation'},
          {title: 'promise'},
          {title: 'animation'},
          {title: 'SVG'},
          {title: 'upload-img'},
          {title: 'form'},
          {title: 'screen'},
          {title: 'githubUserinfo'},
          {title: 'overscroll'}
        ]
      };
    },
    created () {
      this.setHeader();
    },
    methods: {
      ...mapMutations(['SET_HEADER']),
      setHeader () {
        this.SET_HEADER('测试Demo');
      },
      demoLink (title) {
        this.$router.push({
          name: title
        });
      }
    }
  };
</script>

<style lang="less" scoped>
  .demo-item {
    display: inline-block;
    padding: .125rem .25rem;
    border: 1px solid #ccc;
    border-radius: .125rem;
    color: #4fc08d;
    cursor: pointer;
  }

  .black-10 {
    color: rgba(0,0,0,.1);
  }
  .hover-black:focus, .hover-black:active {
    color: #000;
  }
  .link, .link:active, .link:focus, .link:link, .link:visited {
    transition: color .15s ease-in;
  }
  .demo-item {
    margin: 0 10px 10px 0;
  }
  .hover-bg-black-10:focus, .hover-bg-black-10:active, .hover-bg-black-10:hover {
    background-color: rgba(0,0,0,.1);
  }
</style>
