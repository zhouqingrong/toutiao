<template>
    <el-menu
      default-active="/"
      background-color="rgb(0,32,51)"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
    <!-- active-text-color 选中时的颜色   rgb(#001A29)-->
    <!-- text-color 字体的颜色 -->
    <!-- router 是menu的一个属性，以index为路由跳转路径 -->
      <el-menu-item index="/">
        <i class="iconfont iconHomehomepagemenu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/article" >
        <i class="el-icon-document"></i>
        <span slot="title">内容管理</span>
      </el-menu-item>
      <el-menu-item index="/image">
        <i class="iconfont iconimage"></i>
        <span slot="title">素材管理</span>
      </el-menu-item>
      <el-menu-item index="/publish">
        <i class="iconfont iconpublish"></i>
        <span slot="title">发布文章</span>
      </el-menu-item>
      <el-menu-item index="/comment" >
        <i class="iconfont iconcomment"></i>
        <span slot="title">评论管理</span>
      </el-menu-item>
      <el-menu-item index="fans">
        <i class="iconfont iconfans"></i>
        <span slot="title">粉丝管理</span>
      </el-menu-item>
      <el-menu-item index="settings">
        <i class="el-icon-setting"></i>
        <span slot="title">个人设置</span>
      </el-menu-item>
    </el-menu>
</template>
<script>
export default {
  name: "AppAside",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
  },
};
</script>
<style scoped>
.iconfont{
  margin-right: 10px;
  padding-left: 5px;
}
</style>
