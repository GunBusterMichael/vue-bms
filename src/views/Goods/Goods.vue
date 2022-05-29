<template>
  <div class="goods">
    <!-- 搜索区 -->
    <div class="header">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
    </div>

    <!-- 表格区域展示视图数据 -->
    <div class="wrapper">
      <!-- 遍历 tableData 的数据来生成表格 -->
      <el-table border :data="tableData" style="width: 100%">
        <el-table-column type="selection" width="55"> </el-table-column>
        <!-- 该列中所有表格显示的数据为 tableData.prop -->
        <el-table-column prop="id" label="商品ID" width="100">
        </el-table-column>
        <el-table-column prop="title" label="商品名称" width="100">
        </el-table-column>
        <el-table-column prop="price" label="商品价格" width="100">
        </el-table-column>
        <el-table-column prop="num" label="商品数量" width="100">
        </el-table-column>
        <el-table-column prop="category" label="商品类目" width="100">
        </el-table-column>
        <!-- 没有写宽度的列，会均分剩余宽度 -->
        <el-table-column prop="image" label="商品图片" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="sellPoint"
          label="商品卖点"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column prop="descs" label="商品描述" show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <!-- scope.$index：当前下标 -->
            <!-- scope.row：当前行数据 -->
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
              编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 分页 -->
    <div class="footer">
      <pagination
        :total="total"
        :pageSizes="pageSizes"
        @changePage="handleChangePage"
      ></pagination>
    </div>
  </div>
</template>

<script>
import Pagination from "components/Pagination.vue";

export default {
  name: "Goods",
  components: {
    Pagination,
  },
  data() {
    return {
      input: "", // 用户搜索的内容
      tableData: [], // 数据的内容
      total: 0, // 总共有多少条数据
      pageSizes: 0, // 总共有多少页数据
    };
  },
  methods: {
    /* 编辑当前行 */
    handleEdit() {},
    /* 删除当前行 */
    handleDelete() {},
    /* 进行网络请求，并将请求到的数据赋值给当前组件的 data */
    async handleHttp(page) {
      const data = await this.$api.getGoodsList({
        page
      })
      if (data.status == 200) {
        this.tableData = data.data;
        this.total = data.total;
        this.pageSizes = data.pageSizes;
      }
    },
    /* 依据要显示的页面是第几页，获取相对应页的数据 */
    handleChangePage(page) {
      this.handleHttp(page)
    }
  },
  /* 生命周期函数 */
  created() {
    this.handleHttp(1)
  },
};
</script>

<style lang="less" scoped>
.goods {
  margin: 20px;
  .header {
    display: flex;
    button {
      margin-left: 20px;
    }
  }
  .wrapper {
    margin: 20px 0;
  }
  .footer {
    display: flex;
    justify-content: center;
  }
}
</style>