<template>
  <div>
    <h3>vue-xlsx-table</h3>
    <vue-xlsx-table @on-select-file="handleSelectedFile"></vue-xlsx-table>
  </div>
</template>

<script>
  export default {
    name: 'read-file',
    methods: {
      handleSelectedFile (convertedData) {
        console.log(convertedData);
      }
    }
  };
</script>

<style lang="less" scoped>

</style>
