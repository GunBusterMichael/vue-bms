<template>
  <div>
    <!-- total：总共有多少条数据 -->
    <!-- page-sizes：总共有多少页数据 -->
    <el-pagination background layout="total, prev, pager, next, jumper" :total="total" :page-sizes="pageSizes" @current-change="changePage">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    total: {
      type: Number,
      default: 100
    },
    pageSizes: {
      type: Number,
      default: 10
    }
  },
  methods: {
    /*
      current-change 事件的默认参数是要被跳转到的页面的页数
    */
    changePage (page) {
      // console.log(page);
      this.$emit('changePage', page)
    }
  }
};
</script>

<style scoped>
</style>