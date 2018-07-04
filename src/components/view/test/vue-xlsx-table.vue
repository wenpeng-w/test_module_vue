<template>
  <div>
    <div class="vue-component">
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
        this.SET_HEADER(this.$route.name);
      },
      handleSelectedFile (convertedData) {
        console.log(convertedData);
        this.convertedData = JSON.stringify(convertedData);
        // console.log(JSON.stringify(convertedData));
      }
    }
  };
</script>

<style lang="less" scoped>

</style>
