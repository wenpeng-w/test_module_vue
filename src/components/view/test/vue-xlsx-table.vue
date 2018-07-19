<template>
  <div class="upload-excel-container">
    <div class="vue-component">
      <!-- Excel 文件导入 -->
      <vue-xlsx-table @on-select-file="handleSelectedFile">Select one file</vue-xlsx-table>
      <div>{{convertedData}}</div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  export default {
    name: 'vuexlsxtable',
    data () {
      return {
        convertedData: ''
      };
    },
    created () {
      this.setHeader();
    },
    methods: {
      ...mapMutations(['SET_HEADER']),
      setHeader () {
        this.SET_HEADER('VUE-XLSX-TABLE');
      },

      /**
       * Excel 文件导入
       * @param convertedData Excel 内容
       */
      handleSelectedFile (convertedData) {
        console.log(convertedData);
        this.convertedData = JSON.stringify(convertedData);
      }
    }
  };
</script>

<style lang="less">
  .xlsx-button {
    height: 0.6rem;
  }
</style>
