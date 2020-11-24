<template>
  <div class="articleContainer">
    <!-- 上部卡片 -->
    <el-card class="filter-form">
      <div slot="header" class="clearfix">
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>内容管理</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 面包屑 -->
      </div>
      <!-- 筛选表单 -->
      <el-form ref="form" :model="form" label-width="40px" size="mini" class="">
        <el-form-item label="状态">
          <el-radio-group v-model="form.resource">
            <el-radio label="全部"></el-radio>
            <el-radio label="草稿"></el-radio>
            <el-radio label="待审核"></el-radio>
            <el-radio label="审核通过"></el-radio>
            <el-radio label="审核失败"></el-radio>
            <el-radio label="已删除"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="开发者资讯" value="shanghai"></el-option>
            <el-option label="ios" value="beijing"></el-option>
            <el-option label="c++" value="beijing"></el-option>
            <el-option label="Android" value="beijing"></el-option>
            <el-option label="css" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日期">
          <el-date-picker
            v-model="value2"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <!-- 筛选表单 -->
    </el-card>
    <!-- 上部卡片 -->
    <!-- 下部卡片 -->
    <el-card>
      <div slot="header" class="clearfix">
        <span class="bottom-card-header"
          >根据筛选条件共查询到 281822 条结果：</span
        >
      </div>
      <!-- 数据列表 -->
      <!-- 使用：Table 表格组件
      1.把需要展示的数组列表数据绑定给table组件的 data 属性
        注意：你不用去v-for 遍历，它自己会遍历
      2.设计表格列 el-table-column
        width 可以设定列表的宽度
        label 可以设定列的标题
        prop 用来设定要渲染的列表项数据字段
      3.

        -->
      <el-table
        :data="articles"
        style="width: 100%"
        stripe
        size="mini"
        class="list-table"
      >
        <el-table-column prop="" label="封面" width="180">
        </el-table-column>
        <el-table-column prop="title" label="标题" width="180">
        </el-table-column>
        <el-table-column prop="status" label="状态">
          <!-- 在自定义模板中获取当前遍历项的数据，需要在template 上声明
          slot-scope='scope'  -->
          <template slot-scope='scope'>
            <el-tag v-if='scope.row.status === 1'>待审核</el-tag>
            <el-tag v-else-if = 'scope.row.status === 2' type="success">审核通过</el-tag>
            <el-tag v-else-if = 'scope.row.status === 4' type="info">已删除</el-tag>
            <el-tag v-else-if = 'scope.row.status === 0' type="warning">草稿</el-tag>
            <el-tag v-else-if = 'scope.row.status === 3' type="danger">审核失败</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="pubdate" label="发布时间" width="180">
        </el-table-column>
        <el-table-column prop="" label="操作" width="180">
          <!-- 如果需要自定义表格列模板， 则把需要自定义的内容放到 template 里 -->
          <template >
            <el-button
              size="mini"
              type="primary"
              circle
              icon="el-icon-edit"
              ></el-button
            >
            <el-button
              size="mini"
              type="danger"
              circle
              icon="el-icon-delete"
              ></el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 数据列表 -->
      <!-- 分页列表 -->
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
      <!-- 分页列表 -->
    </el-card>
    <!-- 下部卡片 -->
  </div>
</template>
<script>
import { getArticles } from "@/api/article";
export default {
  name: "ArticleIndex",
  components: {},
  props: {},
  data() {
    return {
      articles: {},
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      value2: ""
    };
  },
  computed: {},
  watch: {},
  created() {
    this.loadArticles();
  },
  mounted() {},
  methods: {
    loadArticles() {
      getArticles().then((res) => {
        this.articles = res.data.data.results;
        // console.log("=======================",res)
      });
    },
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
<style scoped>
.filter-form {
  margin-bottom: 15px;
}
.list-table {
  margin-bottom: 15px;
}
.bottom-card-header {
  font-size: 14px;
}
</style>
