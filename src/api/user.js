/**
 * 用户相关请求模块
 */
import request from '@/utils/request'
 //用户登录
 export const login = data => {
  return request({
    method:'POST',
    url:'/mp/v1_0/authorizations',
    //data 用来设置POST请求头
    data
  })
 }

//用户详细信息
export const getUserProfile = ()=>{
  return request({
    method:'GET',
    url:'/mp/v1_0/user/profile'
    //h后端要求把需要授权的用户身份放到请求头
    //axios 可以通过headers 选项设置请求头
    // headers:{
    //   //属性名和值都得看接口
    //   //属性名：Authorization，接口要救的
    //   //属性值：Bearer空格token数据
    //   //以下字符拼接还可以时`Bearer ${user.token}`
    //   Authorization:'Bearer '+ user.token
    // }
  })
}
