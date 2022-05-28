<template>
  <div>
    <!-- default-active：默认被选中的按钮是哪一个 -->
    <!--
      router="true"：
        将按钮变为 router-link。
        每一个按钮的 index 变为要跳转到的路由路径
    -->
    <el-menu
      default-active="/"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router="true"
      collapse="true"
    >
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="goods">
        <i class="el-icon-document"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>
      <el-menu-item index="params">
        <i class="el-icon-setting"></i>
        <span slot="title">规格参数</span>
      </el-menu-item>
      <el-menu-item index="advert">
        <i class="el-icon-setting"></i>
        <span slot="title">广告分类</span>
      </el-menu-item>
      <!-- el-submenu 可下拉的按钮 -->
      <el-submenu index="order">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/order/order-list">
            <i class="el-icon-setting"></i>
            <span slot="title">订单列表</span>
          </el-menu-item>
          <el-menu-item index="/order/return-order">
            <i class="el-icon-setting"></i>
            <span slot="title">退货订单</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "SideNavBar",
    
  }
</script>

<style scoped>
  
</style>