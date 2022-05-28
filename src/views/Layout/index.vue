<template>
  <div class="layout">
    <!-- 侧边导航栏 -->
    <side-nav-bar
      class="sideNavBar"
      :isCollapse="isCollapse"
    >
    </side-nav-bar>
    <!-- 右侧内容区 -->
    <Content
      class="content"
      @switchCollapse="handleCollapse"
      :isCollapse="isCollapse"
      :class="{navCollapse: isCollapse}"
    >
    </Content>
  </div>
</template>

<script>
  import SideNavBar from './components/SideNavBar.vue'
  import Content from './components/Content.vue'

  export default {
    name: "index",
    components: {
      SideNavBar,
      Content
    },
    data () {
      return {
        isCollapse: false
      }
    },
    methods: {
      handleCollapse () {
        this.isCollapse = !this.isCollapse
      }
    }
  }
</script>

<style lang="less" scoped>
  .sideNavBar {
    position: fixed;  // 使用了 fixed 布局后，sideNavBar 会脱离文本流
    top: 0;
    bottom: 0;
    left: 0;
    // width: 200px;
    background-color: #1b3554;
  }
  .content {
    margin-left: 200px;
  }
  .navCollapse {
    margin-left: 64px;
  }
</style>