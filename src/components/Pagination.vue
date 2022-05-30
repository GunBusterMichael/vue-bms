<template>
  <div>
    <!-- total：总共有多少条数据 -->
    <!-- page-sizes（数组形式）：总共有多少页数据 -->
    <el-pagination background layout="total, prev, pager, next, jumper" :total="total" :page-size="pageSize" :current-page="currentPage" @current-change="changePage">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data () {
    return {
      currentPage: 1
    }
  },
  props: {
    total: {
      type: Number,
      default: 100
    },
    pageSize: {
      type: Number,
      default: 10
    },
    searchRes: {
      type: Array,
      default: []
    }
  },
  methods: {
    /*
      current-change 事件的默认参数是要被跳转到的页面的页数
    */
    changePage (page) {
      this.currentPage = page
      this.$emit('changePage', page)
    }
  },
  watch: {
    /* 
      监听搜索结果的变化。当搜索结果变化的时候，将分页器的默认当前页数改为 1。
      当搜索新数据 和 搜索框内没有内容但仍进行搜索（显示全部数据）的时候，会更新搜索结果
    */
    searchRes () {
      this.currentPage = 1
    }
  }
};
</script>

<style scoped>
</style>