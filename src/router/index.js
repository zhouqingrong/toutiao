import Vue from 'vue'
import Router from 'vue-router'
//@/===> src/，不受当前文件路径影响
import Login from '@/views/login/index.vue'
import Test from '@/views/test/test.vue'
import Home from '@/views/home'
import Layout from '@/views/layout'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/',
      // name: 'layout',//当有子路由时，父路由不用取名字，取了名字会有无意义的警告
      component: Layout,
      children: [
        {
          path: '', //''path为空，会作为默认子路由渲染
          name: 'home',
          component: Home
        },
      ]
    },

    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
