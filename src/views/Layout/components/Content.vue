<template>
  <div class="content">
    <div class="header">
      <i
        v-if="isCollapse"
        @click="switchCollapse"
        class="iconfont icon-left-indent"
      ></i>
      <i v-else @click="switchCollapse" class="iconfont icon-right-indent"></i>
    </div>
    <!-- Home、Goods、Advert、Order、Params的出口（二级路由出口） -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Content",
  props: {
    isCollapse: Boolean,
  },
  methods: {
    switchCollapse() {
      this.$emit("switchCollapse");
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  background-color: #ddd;
  height: 1200px;
  .header {
    height: 50px;
    line-height: 50px;
    color: #fff;
    background-color: #1e78bf;
    font-size: 20px;
    .iconfont {
      font-size: 20px;
      cursor: pointer;
    }
  }
}
</style>