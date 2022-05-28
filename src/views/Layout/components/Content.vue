<template>
  <div style="height:1200px;background-color:pink">
    <h2>右边内容区</h2>
    <!-- Home、Goods、Advert、Order、Params的出口（二级路由出口） -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Content",
    
  }
</script>

<style scoped>
  
</style>