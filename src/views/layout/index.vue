<template>
  <el-container class="layoutContainer">
    <el-aside class="aside">
      <AppAside class="aside-menu" />
      <!-- 第二种写法：<app-aside/> -->
    </el-aside>
    <el-container>
      <el-header class="header">
        <div>
          <i class="el-icon-s-fold"></i>
          <span>江苏传智播客科技教育有限公司</span>
        </div>
        <el-dropdown>
          <div class="avatar-wrap">
            <img class="avatar" src='http://toutiao-img.itheima.net/Ftb-E6bXjx1HlnJHPhe5N6E_seaI'/>
            <span>用户昵称
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item>推出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main class="main">
        <!-- 子路由出口 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import AppAside from "./components/aside";
export default {
  name: "layoutIndex",
  components: {
    AppAside,
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.layoutContainer {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.aside {
  width: 200px;
  background-color: rgb(211, 220, 230);
}
.aside-menu {
  height: 100%;
}
.header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  /* background-color: rgb(179, 192, 209); */
}
.main {
  background-color: rgb(233, 238, 243);
}
.avatar-wrap{
  display: flex;
  align-items: center;
}
.avatar{
  width:40px;
  height: 40px;
  border-radius:  50%;
  margin-right: 10px;
}
</style>
