<template>
  <div>
    <div id="main"></div>
  </div>
</template>

<script>
import E from "wangeditor";

export default {
  name: "WangEditor",
  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    /* 创建 wangEditor 实例 */
    this.editor = new E("#main");

    // 配置 onchange 回调函数
    // newHtml：编辑器中的内容（HTML格式）
    this.editor.config.onchange = (newHtml) => {
      // console.log("change 之后最新的 html", newHtml);
      this.$emit("emitEditorContent", newHtml);
    };
    // 配置触发 onchange 的时间频率，默认为 200ms
    this.editor.config.onchangeTimeout = 500; // 修改为 500ms

    // 取消自动 focus
    this.editor.config.focus = false;

    // 配置菜单栏，删减菜单，调整顺序
    this.editor.config.menus = ["bold", "head", "link", "italic", "underline"];

    this.editor.create();
  },
};
</script>

<style lang="less" scoped>
</style>