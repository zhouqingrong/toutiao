//基于axios封装的请求模块

import axios from 'axios'
//创建一个 axios 实例

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
})

//请求拦截器
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
