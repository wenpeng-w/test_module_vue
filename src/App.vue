<template>
  <div id="app" class="layout">
    <tab-bar></tab-bar>
    <div class="main-container">
      <router-view/>
    </div>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
  import tabBar from './components/common/tabBar';
  import navBar from './components/common/navBar';

  export default {
    name: 'App',
    components: {
      tabBar,
      navBar
    }
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #35495e;
    font-size: .28rem;
  }
  .main-container {
    position: relative;
    padding: 0.3rem 0.24rem;
    animation: all linear 20ms;
  }
</style>
