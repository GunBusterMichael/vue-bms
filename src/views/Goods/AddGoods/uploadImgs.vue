<template>
  <div>
    <el-upload
      :action="uploadUrl"
      list-type="picture-card"
      ref="upload"
      :auto-upload="false"
      :file-list="fileList"
      :on-change="change"
      :on-remove="removeHock"
      :on-success="successUpload"
      multiple
    >
      <i slot="default" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{ file }">
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="el-upload-list__item-actions">
          <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
          >
            <i class="el-icon-zoom-in"></i>
          </span>
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
      <!-- <el-button @click.stop="submitUpload">上传</el-button> -->
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
import url from "network/url";

export default {
  name: "uploadImgs",
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      fileList: [],
      newFileList: [],
      imgUrls: [],
      uploadUrl: url.uploadUrl,
      host: url.host,
    };
  },
  methods: {
    handleRemove(file, fileList) {
      let uploadFiles = this.$refs.upload.uploadFiles // 获取已上传到网页上的文件
      let index = uploadFiles.indexOf(file) // 获取被删除文件在已上传文件中是第几个文件
      uploadFiles.splice(index, 1) // 删除文件
      this.newFileList = uploadFiles
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    removeHock (fileList) {
      this.newFileList = fileList
      console.log(this.newFileList.length);
    },
    change(file, fileList) {
      this.newFileList = fileList
      console.log(this.newFileList.length);
    },
    clearAllImgs () {
      this.$refs.upload.clearFiles();
    },
    successUpload(response, file, fileList) {
      this.imgUrls = [];
      for (let item of fileList) {
        this.imgUrls.push(this.host + "/" + item.response.url.slice(7));
      }
      console.log(this.imgUrls);
      this.$emit('subForm')
    },
    submitUpload() {
      this.$refs.upload.submit();
      // this.imgUrls = []
      // console.log(this.newFileList);
      // if (this.newFileList.length > 0) {
      //   for (let item of this.newFileList) {
      //     this.imgUrls.push(this.host + '/' + item.slice(7))
      //   }
      //   console.log(this.imgUrls);
      // }
    },
    // emitUrls (fileList) {
    //   /*
    //     截取已上传图片的 url
    //     response.url: 'upload\\1654008517995-carol.gif'
    //   */
    //   // console.log(fileList);
    //   this.imgUrls = []
    //   if (fileList.length > 0) {
    //     for (const item of fileList) {
    //       this.imgUrls.push(url.host + '/' + item.response.url.slice(7))
    //     }
    //   }
    //   console.log('imgUrls', this.imgUrls);
    //   // this.$emit('emitImgUrls', this.imgUrls)
    // },
  },
};
</script>

<style scoped>
</style>