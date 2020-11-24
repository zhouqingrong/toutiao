//基于axios封装的请求模块

import axios from 'axios'
//创建一个 axios 实例

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
})

//请求拦截器
request.interceptors.request.use(
   //任何请求都会经过这里
  //config 是当前请求相关的配置信息对象
  //config 是可以修改的 ，可以打印看一看
  function (config) {
    const user = JSON.parse(window.localStorage.getItem('user'))
    // console.log('1===:',user)
    //如果有用户登录信息，则统一设置token
    if(user){
      config.headers.Authorization = `Bearer ${user.token}`
      // console.log('2===:',config)
    }
    //然后我们可以在允许请求发送出之前定制同意业务处理
    //例如：统一设置token
    //当这里 return config 之后请求才会真正的发送出去
    return config;
}, function (error) {
    return Promise.reject(error);
});
//响应拦截器

//导出请求方法
export default request
//谁要使用谁就加载 request 模块
// import request from 'request.js'
// request.XXX
// request({
//   method:,
//   url:''
// })
