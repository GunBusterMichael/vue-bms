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
        <el-table-column prop="image" label="商品图片" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="sellPoint" label="商品卖点" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="descs" label="商品描述" show-overflow-tooltip> </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <!-- scope.$index：当前下标 -->
            <!-- scope.row：当前行数据 -->
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
            >
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
    <!-- <div class="footer">Footer</div> -->
  </div>
</template>

<script>
export default {
  name: "Goods",
  data() {
    return {
      input: "",
      tableData: []
    };
  },
  methods: {
    /* 编辑当前行 */
    handleEdit () {

    },
    /* 删除当前行 */
    handleDelete () {

    }
  },
  /* 生命周期函数 */
  created () {
    this.$api.getGoodsList({
      page: 1
    })
    .then(res => {
      // console.log(res.data)
      if (res.data.status == 200) {
        this.tableData = res.data.data
      }
    })
  }
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
}
</style>