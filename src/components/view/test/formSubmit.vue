<template>
  <div class="form-container">
    <form id="form" enctype="multipart/form-data">
      <div class="form-cell">
        <label>username</label>
        <input type="text" v-model="username" name="username">
      </div>
      <div class="form-cell">
        <label>Img</label>
        <input type="file" name="avatar" accept="image/*" @change="getFile($event)">
      </div>
      <button type="button" class="submit-btn" @click="formSubmit()">表单提交</button>
    </form>
  </div>
</template>

<script>
  import $ from 'jquery';
  import {mapMutations} from 'vuex';

  export default {
    name: 'form-submit',
    data () {
      return {
        username: '',
        file: ''
      };
    },
    created () {
      this.setHeader();
    },
    methods: {
      ...mapMutations(['SET_HEADER']),
      setHeader () {
        this.SET_HEADER('表单提交');
      },
      getFile (event) {
        this.file = event.target.files[0];
        console.log(this.file);
      },
      formSubmit () {
        // console.log($('#form').serialize());
        // event.preventDefault();
        // var formData = new FormData($('#form')[0]);
        // $.ajax({
        //   url: 'http://192.168.1.139:8089/crmApi/surveyQuestion/uploadImg.json',
        //   type: 'POST',
        //   data: formData,
        //   async: false,
        //   cache: false,
        //   contentType: false,
        //   processData: false,
        //   headers: {
        //     'appToken': '221_dwhtest3'
        //   },
        //   success: function (data) {
        //     console.log(JSON.parse(data));
        //   },
        //   error: function (data) {
        //   }
        //
        // });
        // var formData = new FormData();
        // formData.append('name', this.username);
        // formData.append('file', this.file);
        //
        // let config = {
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'appToken': '221_dwhtest3'
        //   }
        // }
        //
        // this.$axios.post('http://192.168.1.139:8089/crmApi/surveyQuestion/uploadImg.json', formData, config).then(function (res) {
        //   console.log(res);
        // })
      }
    }
  };
</script>

<style lang="less" scoped>
  .form-container {
    padding: 0.24rem;
    .form-cell {
      display: flex;
      padding: 0.2rem 0;
      align-items: center;
      label {
        display: block;
        width: 1.4rem;
        margin-right: 0.2rem;
      }
      input {
        display: block;
        flex: 1;
        &[type='file'] {
          width: 200px;
        }
        &[type='text'] {
          border: 1px solid #c5c5c5;
          padding: 0.14rem 0.24rem;
        }
      }
    }
    .submit-btn {
      width: 100%;
      height: 0.8rem;
      margin-top: 0.2rem;
      background-color: #4292f7;
      color: #fff;
      text-align: center;
      border-radius: 3px;
      &:active {
        opacity: 0.85;
      }
    }
  }
</style>
