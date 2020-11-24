/**
 * 文章相关请求模块
 */

 import request from '@/utils/request'

 /**
  * 获取文章列表
  */
 export const getArticles = params => {
   return request({
     method: 'GET',
     url: '/mp/v1_0/articles',
     //Body 参数使用data设置
     //Query 参数使用params 设置
     //Headers参数使用headers 设置
     params
   })
 }
