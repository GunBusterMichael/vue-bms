<template>
  <div>
    <el-dialog
      width="500px"
      title="上传图片"
      :visible.sync="innerVisible"
      append-to-body
    >
      <!--
        action：上传地址 | 必选 | String；
        :on-preview="handlePreview"：点击已上传文件时要进行回调的函数；
        :on-remove="handleRemove"：移除已上传文件时要进行回调的函数；
        :file-list="fileList"：展示已上传文件的列表 | Array；
        :auto-upload="false"：自动上传；
        :on-success：文件上传成功后要进行回调的函数。
      -->
      <el-upload
        class="upload-demo"
        ref="upload"
        :action="uploadUrl"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :auto-upload="false"
        :on-success="successUpload"
        accept=".jpg, .jpeg, .png, .gif"
        multiple
      >
        <el-button slot="trigger" size="small" type="primary"
          >选取文件</el-button
        >
        <el-button
          style="margin-left: 10px"
          size="small"
          type="success"
          @click="submitUpload"
          >上传到服务器</el-button
        >
      </el-upload>

      <span slot="footer" class="dialog-footer">
        <el-button @click="closeThisDialog">取 消</el-button>
        <el-button type="primary" @click="handleClickConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import url from "network/url";

export default {
  name: "ImgInnerDialog",
  data() {
    return {
      innerVisible: false,
      categoryFullData: {},
      uploadUrl: url.uploadUrl,
      fileList: [],
    };
  },
  methods: {
    /* 点击按钮上传图片 */
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      // console.log(fileList);
    },
    handlePreview(file) {
      // console.log(file);
    },
    successUpload(response, file, fileList) {
      // console.log('response:', response);
      // console.log('fileList:', fileList);
      // console.log('file:', file);
      // console.log('fileList:', fileList);
      /* 显示“图片上传成功”提示 */
      this.$message({
        message: "图片上传成功",
        type: "success",
      });
      this.emitUrls(fileList)
    },
    /* 上传包含已上传图片的 url */
    emitUrls (fileList) {
      /*
        截取已上传图片的 url
        response.url: 'upload\\1654008517995-carol.gif'
      */
      let imgUrls = []
      for (const item of fileList) {
        imgUrls.push(url.host + '/' + item.response.url.slice(7))
      }
      // console.log('imgUrls', imgUrls);
      this.$emit('emitImgUrls', imgUrls)
    },
    /* 关闭当前弹出框 */
    closeThisDialog() {
      this.innerVisible = false;
    },
    /* 让父组件知道上传 img 子组件已关闭，可以显示已上传图片 */
    handleClickConfirm() {
      this.closeThisDialog();
      this.$emit("showImg");
    },
  },
};
</script>

<style lang="less" scoped>
</style>