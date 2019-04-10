<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style lang="less">



html, body {
    height: 100%;
    width: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
}

#app {
    width: 100%;
    height: 100%;
    border: none;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 14px;
    }
    
.ivu-select-dropdown{
    width: 300px!important;
}
</style>
