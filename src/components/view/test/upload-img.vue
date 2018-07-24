<template>
  <div class="upload-container">
    <!--上传图片-->
    <div class="upload-image">
      <van-button type="primary" size="small">upload image</van-button>
      <input class="file-hide" @change="uploadImage" multiple type="file" accept="image/*">
    </div>
    <div class="upload-image">
      <van-button type="primary" size="small">upload text</van-button>
      <input class="file-hide" @change="uploadText" type="file" accept="text/*">
    </div>
    <div v-if="pics.length > 0" class="img-container">
      <div v-for="(pic, index) in pics" :key="index" class="img-item"><img :src="pic" :alt="`pic_${index}`"></div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'upload-img',
  data () {
    return {
      pics: []
    };
  },
  created () {
    this.setHeader();
  },
  methods: {
    ...mapMutations(['SET_HEADER']),
    setHeader () {
      this.SET_HEADER('上传文件');
    },

    /**
     * 上传图片
     * @param e 包含 file 对象的 fileList 对象
     * 方法1. window.URL.createObjectURL()
     * 方法2. FileReader() 读取文件
     */
    uploadImage (e) {
      let files = e.target.files;
      if (!files || files.length === 0) return;
      files = Array.from(files);
      files.forEach(file => {
        // 方法1
        let pic = window.URL.createObjectURL(file);
        this.pics.push(pic);
        // window.URL.revokeObjectURL(pic);

        // 方法2
        // let reader = new FileReader();
        // reader.onloadend = () => {
        //   console.log('onloadend');
        //   this.pics.push(reader.result);
        // };
        // reader.readAsDataURL(file);
      });
    },
    /**
     * 上传 TEXT 文件
     * @param e
     */
    uploadText (e) {
      let files = e.target.files[0];
      if (!files || files.length === 0) return;
      let reader = new FileReader();
      reader.onloadend = () => {
        this.pics.push(reader.result);
      };
      reader.readAsText(files, 'gb2312');
    }
  }
};
</script>

<style lang="less" scoped>

  .upload-image {
    position: relative;
    display: inline-block;
  }
  .img-container {
    overflow: hidden;
    margin: 1% 0;
    font-size: 0;
  }
  .img-item {
    width: 20%;
    padding-top: 20%;
    position: relative;
    display: inline-block;
    overflow: hidden;
    img {
      position: absolute;
      top: 5%;
      left: 5%;
      width: 90%;
      height: 90%;
      background-color: #f5f5f5;
    }
  }
  .file-hide {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .form-cell {
    margin: 20px 0;
  }
  input {
    border: 1px solid #d5d5d5;
  }
  .submit-btn {
    width: 100px;
    height: 40px;
    line-height: 40px;
  }
</style>
