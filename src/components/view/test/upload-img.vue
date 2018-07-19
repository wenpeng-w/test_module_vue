<template>
  <div class="upload-container">
    <!--上传图片-->
    <div class="upload-image">
      <van-button type="primary" size="small">upload image</van-button>
      <input class="file-hide" @change="upload" multiple type="file" accept="image/*">
    </div>
    <div>
      <p v-for="(item, index) in imgList" :key="index">{{item}}</p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'upload-img',
  data () {
    return {
      imgList: []
    };
  },
  created () {
    this.setHeader();
  },
  methods: {
    ...mapMutations(['SET_HEADER']),
    setHeader () {
      this.SET_HEADER('上传图片');
    },

    /**
     * 上传图片
     * @param e 包含 file 对象的 fileList 对象
     * 方法1. window.URL.createObjectURL()
     * 方法2. FileReader()
     */
    upload (e) {
      let files = e.target.files;
      if (!files || files.length === 0) return;
      files = Array.from(files);
      files.forEach(file => {
        // let reader = new FileReader();
        // reader.onloadend = () => {
        //   console.log('onloadend');
        //   this.imgList.push(reader.result);
        // };
        // reader.readAsDataURL(file);
        this.imgList.push(file.lastModifiedDate);
        this.imgList.push(file.size);
        this.imgList.push(file.type);
        this.imgList.push(window.URL.createObjectURL(file));
        console.log(JSON.parse(file));
        // this.imgList.push(window.URL.createObjectURL(file));
      });
    }
  }
};
</script>

<style lang="less" scoped>

  .upload-image {
    position: relative;
    display: inline-block;
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
</style>
