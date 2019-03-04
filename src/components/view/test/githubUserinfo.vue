<template>
  <div class="userinfo">
    <span @click="getUserinfo()">GithubUserinfo</span>
    <div class="userinfo-wrap">
      <p v-for="(val, key) in userinfo" :key="key">
        <span>{{key}}: </span><span>{{val || '***'}}</span>
      </p>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  export default {
    name: 'github-userinfo',
    data () {
      return {
        userinfo: null
      };
    },
    created () {
      this.setHeader();
      this.rateLimit();

      this.getUserinfo();
    },
    methods: {
      ...mapMutations(['SET_HEADER']),
      setHeader () {
        this.SET_HEADER('USERINFO');
      },
      getUserinfo () {
        this.$axios({
          headers: {
            'Accept': 'application/vnd.github.v3+json'
          },
          method: 'get',
          url: 'https://api.github.com/users/wenpeng-w'
        }).then(data => {
          console.log(data);
          if (data.status !== 200) {
            // console.log(data.msg);
            return false;
          }
          this.userinfo = data.data;
        }).catch(err => {
          console.log(JSON.stringify(err));
          var errCode = err.response && err.response.status;
          var errMsg;
          if (errCode === 404) {
            errMsg = err.message;
          } else {
            errMsg = '网络出错，请检查网络';
          }
          this.$toast({
            message: errMsg,
            duration: 1000
          });
        });
      },
      rateLimit () {
        this.$axios({
          headers: {
            'Accept': 'application/vnd.github.v3+json'
          },
          method: 'get',
          url: 'https://api.github.com/rate_limit'
        }).then(data => {
          console.log(data);
        }).catch(err => {
          console.log(err);
        });
      }
    }
  };
</script>

<style lang="less" scoped>
.userinfo {
  font-size: 12px;
  /*word-break: break-all;*/
}
  .userinfo-wrap {
    p {
      position: relative;
      margin: 6px auto;
      span {
        display: inline;
        vertical-align: middle;
      }
    }
  }
</style>
