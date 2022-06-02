<template>
  <div class="add-goods">
    <!-- 面包屑 -->
    <Breadcrumb></Breadcrumb>

    <!-- 表单 -->
    <div class="form-wrapper">
      <el-form
        :model="goodsForm"
        :rules="rules"
        ref="goodsForm"
        label-width="100px"
        class="demo-goodsForm"
      >
        <el-form-item label="类目选择" prop="category">
          <el-button type="primary">类目选择</el-button>
        </el-form-item>

        <el-form-item label="商品名称" prop="title">
          <el-input v-model="goodsForm.title"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" prop="price">
          <el-input v-model="goodsForm.price"></el-input>
        </el-form-item>
        <el-form-item label="商品数量" prop="num">
          <el-input v-model="goodsForm.num"></el-input>
        </el-form-item>
        <el-form-item label="上架时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="goodsForm.date1"
                style="width: 100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker
                placeholder="选择时间"
                v-model="goodsForm.date2"
                style="width: 100%"
              ></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="商品卖点" prop="sellPoint">
          <el-input v-model="goodsForm.sellPoint"></el-input>
        </el-form-item>

        <el-form-item label="商品图片" prop="image">
          <el-button type="primary">上传图片</el-button>
        </el-form-item>

        <el-form-item label="商品描述" prop="descs">
          <el-input type="textarea" v-model="goodsForm.descs"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('goodsForm')"
            >确定</el-button
          >
          <el-button @click="resetForm('goodsForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "./Breadcrumb.vue";

export default {
  name: "AddGoods",
  components: {
    Breadcrumb,
  },
  data() {
    return {
      goodsForm: {
        // 表单双向绑定的数据
        category: "",
        title: "",
        price: "",
        num: "",
        date1: "",
        date2: "",
        sellPoint: "",
        image: "",
        descs: "",
      },
      rules: {
        // 校验规则
        title: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          { min: 2, max: 8, message: "长度在 2 到 8 个字符", trigger: "blur" },
        ],
        price: [
          { required: true, message: "请输入商品价格", trigger: "blur" },
          {
            pattern: /^[1-9]+(\.[0-9]{1,2})?$/,
            message: "请输入最多有2位小数的正数（不包含0）",
          },
        ],
        num: [
          { required: true, message: "请输入商品数量", trigger: "blur" },
          { pattern: /^\+?[1-9]\d*$/, message: "请输入大于0的正整数" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.add-goods {
  margin: 20px;
  .form-wrapper {
    padding: 20px 20px 10px 10px;
    margin-top: 10px;
    border-radius: 5px;
    background-color: #fff;
    .line {
      text-align: center;
    }
  }
}
</style>