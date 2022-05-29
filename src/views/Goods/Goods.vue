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
      <el-table border :data="tableData" style="width: 100%">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="date" label="商品ID" width="100">
        </el-table-column>
        <el-table-column prop="name" label="商品名称" width="100">
        </el-table-column>
        <el-table-column prop="name" label="商品价格" width="100">
        </el-table-column>
        <el-table-column prop="name" label="商品数量" width="100">
        </el-table-column>
        <el-table-column prop="name" label="商品类目" width="100">
        </el-table-column>
        <!-- 没有写宽度的列，会均分剩余宽度 -->
        <el-table-column prop="name" label="商品图片"> </el-table-column>
        <el-table-column prop="name" label="商品卖点"> </el-table-column>
        <el-table-column prop="name" label="商品描述"> </el-table-column>
        <el-table-column prop="name" label="操作" width="180">
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
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
    };
  },
  methods: {
    /* 编辑当前行 */
    handleEdit () {

    },
    /* 删除当前行 */
    handleDelete () {

    }
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