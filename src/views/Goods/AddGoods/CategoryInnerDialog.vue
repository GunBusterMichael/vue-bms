<template>
  <div>
    <el-dialog
      width="500px"
      title="类目选择"
      :visible.sync="innerVisible"
      append-to-body
    >
      <!--
        props: tree 配置项；
        load：tree 被加载时，和子级 tree 被加载时，会运行 load 的函数（用于获取 tree 数据）；
        accordion：是否每次只能展开一个同级节点
      -->
      <el-tree
        :props="props"
        :load="loadNode"
        ref="selectTree"
        lazy
        accordion
        @node-click="handleNodeClick"
      >
      </el-tree>

      <span slot="footer" class="dialog-footer">
        <el-button @click="closeThisDialog">取 消</el-button>
        <el-button type="primary" @click="emitCategory">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "CategoryInnerDialog",
  data() {
    return {
      innerVisible: false,
      categoryFullData: {},
      props: {
        label: "name",
        children: "zones",
        isLeaf: "leaf",
      },
    };
  },
  methods: {
    /* 节点被点击时，调用该函数 */
    /* data 是当前被点击的节点所使用的数据 */
    handleNodeClick(data) {
      this.categoryFullData = data;
    },
    /* 关闭当前弹出框 */
    closeThisDialog() {
      this.innerVisible = false;
    },
    /* 将被点击的类目传递到父组件中 */
    emitCategory() {
      if (!this.categoryFullData.name) {
        this.$message.error("您未选择商品类目");
      } else {
        this.closeThisDialog();
        this.$emit("emitCategory", this.categoryFullData);
      }
    },
    /*
      resolve：
        点击列表后，会被回调的函数。用于获取数据
    */
    async loadNode(node, resolve) {
      /* (node.level === 0)：展示的是最外层的 tree */
      if (node.level === 0) {
        /* 进入类目选择页面后，获取最外层列表的数据（level=0） */
        const data = await this.$api.getSelectCategory();
        if (data.status === 200) {
          // return resolve([{ name: "region" }]);
          return resolve(data.result);
        }
      }
      /* (node.level >= 1)：展示子级的 tree */
      if (node.level >= 1) {
        /* 获取子级 tree 的数据 */
        const data = await this.$api.getSelectCategory({ id: node.data.cid });
        if (data.status === 200) {
          // return resolve([{ name: "region" }]);
          return resolve(data.result);
        } else {
          return resolve([]);
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
</style>