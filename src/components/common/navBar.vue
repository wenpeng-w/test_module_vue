<template>
  <!-- 底部导航栏 -->
  <div class="nav-bar">
    <div class="nav">
      <router-link :to="item.url" v-for="(item, index) in navs" :key="index" class="nav-item">
        <img class="nav-icon" :src="routerLink === item.url ? item.icon_active : item.icon" alt="">
        <p class="nav-name">{{item.name}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'nav-bar',
    data () {
      return {
        routerLink: '',
        navs: [
          {
            'name': '首页',
            'icon': require('../../assets/image/index.png'),
            'icon_active': require('../../assets/image/index-active.png'),
            'url': '/index'
          },
          {
            'name': '车队',
            'icon': require('../../assets/image/motorcade.png'),
            'icon_active': require('../../assets/image/motorcade-active.png'),
            'url': '/motorcade'
          },
          {
            'name': '服务',
            'icon': require('../../assets/image/service.png'),
            'icon_active': require('../../assets/image/service-active.png'),
            'url': '/service'
          },
          {
            'name': '我的',
            'icon': require('../../assets/image/my.png'),
            'icon_active': require('../../assets/image/my-active.png'),
            'url': '/my'
          },
          {
            'name': '测试',
            'icon': require('../../assets/image/logo.png'),
            'icon_active': require('../../assets/image/logo.png'),
            'url': '/test'
          }
        ]
      };
    },
    watch: {
      '$route': 'watchRouter'
    },
    created () {
      this.watchRouter();
    },
    methods: {
      watchRouter () {
        this.routerLink = this.$route.path;
      }
    }
  };
</script>

<style lang="less" scoped>
  .nav-bar {
    /*position: fixed;*/
    .nav {
      display: flex;
      width: 100%;
      /*height: .98rem;*/
      padding: .12rem 0;
      border-top: .01rem solid #dedede;
      text-align: center;
      font-size: .24rem;
      .nav-item {
        flex: 1;
        color: #333;
        .nav-icon {
          display: inline-block;
          width: .4rem;
          height: .4rem;
          vertical-align: top;
        }
        &.router-link-active {
          color: #246df1;
        }
      }
    }
    left: 0;
    bottom: 0;
    width: 100%;
  }
</style>
