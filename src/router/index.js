import Vue from 'vue'
import Router from 'vue-router'
//@/===> src/，不受当前文件路径影响
import Login from '@/views/login/index.vue'
import Test from '@/views/test/test.vue'
import Home from '@/views/home'
import Layout from '@/views/layout'
import Article from '@/views/article'
Vue.use(Router)

const  routes = [
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
        {
          path: '/article',
          name: 'article',
          component: Article
        }
      ]
    },

    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
const router = new Router({
  routes
})
//导航守卫 所有页面都经过它
//to :要跳转的页面
//from： 从哪个页面跳转而来
//next： 放行的方法 next()
router.beforeEach((to, from, next) => {
  console.log('to:',to)
  console.log('from:',from)
  const user = JSON.parse(window.localStorage.getItem('user'))
  if(to.path !== '/login'){
    if(user){
      //已登录，放行
      next()
    }else{
      next('/login') //未登录，重定向到登录
    }
  }else{
    next()//登录页面放行
  }

})
export default router
