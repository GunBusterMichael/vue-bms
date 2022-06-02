<template>
  <div>
    <el-dialog title="添加商品" :visible.sync="dialogVisible" width="90%">
      <!-- 对话框内容 -->
      <div class="form-wrapper">
        <el-form
          :model="goodsForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-goodsForm"
        >
          <el-form-item label="类目选择" prop="category">
            <el-button type="primary" @click="openCategory">类目选择</el-button>
            <span class="categoryRes">{{ showCategory }}</span>
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

          <el-form-item label="商品图片" prop="images">
            <el-button type="primary" @click="openImg">上传图片</el-button>
            <div class="imgs-wrapper">
              <img
                v-for="item in goodsForm.images"
                :key="item"
                :src="item"
                alt=""
              />
            </div>
          </el-form-item>

          <el-form-item label="商品描述" prop="descs">
            <!-- <el-input type="textarea" v-model="goodsForm.descs"></el-input> -->
            <wang-editor @emitEditorContent="handleEditorContent"></wang-editor>
          </el-form-item>
        </el-form>
      </div>

      <!-- 底部弹窗区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </span>

      <!-- 内弹窗-类目选择 -->
      <category-inner-dialog
        ref="categoryInnerDialog"
        @emitCategory="handleEmitCategory"
      ></category-inner-dialog>

      <!-- 内弹窗-上传图片 -->
      <img-inner-dialog
        ref="imgInnerDialog"
        @emitImgUrls="handleEmitImgUrls"
        @showImg="handleShowImg"
      ></img-inner-dialog>
    </el-dialog>
  </div>
</template>

<script>
import CategoryInnerDialog from "./CategoryInnerDialog.vue";
import ImgInnerDialog from "./ImgInnerDialog.vue";
import WangEditor from "./WangEditor.vue";

export default {
  name: "GoodsDialog",
  components: {
    CategoryInnerDialog,
    ImgInnerDialog,
    WangEditor,
  },
  data() {
    return {
      dialogVisible: false,
      categoryFullData: {},
      imagesCache: [],
      isHiddenDeleteImgButton: [],
      // hiddenButton: {
      //   display: 'hidden'
      // },
      goodsForm: {
        // 表单双向绑定的数据
        category: "",
        title: "",
        price: "",
        num: "",
        date1: "",
        date2: "",
        sellPoint: "",
        images: [],
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
  computed: {
    showCategory() {
      if (!this.goodsForm.category) {
        return "";
      } else {
        return "您已选择：" + this.goodsForm.category;
      }
    },
  },
  methods: {
    // closeDialog() {
    //   this.$emit("closeDialog", false);
    // },

    /* 打开商品类别弹窗 */
    openCategory() {
      this.$refs.categoryInnerDialog.innerVisible = true;
    },

    /* 打开选择图片弹窗 */
    openImg() {
      this.$refs.imgInnerDialog.innerVisible = true;
    },
    handleEmitCategory(val) {
      this.categoryFullData = val;
      this.goodsForm.category = val.name;
    },
    handleEmitImgUrls(imgUrls) {
      // this.goodsForm.images = imgUrls
      this.imagesCache = imgUrls;
      this.imagesCache.forEach(() => {
        this.isHiddenDeleteImgButton.push(true);
      });
      console.log(this.isHiddenDeleteImgButton);
    },
    handleShowImg() {
      this.goodsForm.images = this.imagesCache;
    },
    showDeleteImg(index) {
      this.isHiddenDeleteImgButton[index] = false;
    },
    handleEditorContent(newHTML) {
      this.goodsForm.descs = newHTML;
    },
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          console.log("输入的信息：", this.goodsForm);
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
.form-wrapper {
  padding-right: 20px;
  .line {
    text-align: center;
  }
  .categoryRes {
    margin-left: 10px;
  }
  .imgs-wrapper {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    overflow: hidden;
    width: 100%;
    img {
      width: 180px;
      margin: 6px 6px 0 0;
    }
    .hiddenButton {
      display: none;
    }
  }
}
</style>