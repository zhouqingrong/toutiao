<template>
  <div class="loginContioner">
    <el-form class="loginForm" ref="loginForm" :model="user" :rules="rules">
       <div class="loginHead"></div>
      <el-form-item  prop='mobile'>
        <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item prop='code' >
        <el-input v-model="user.code" placeholder="请输入验证码"></el-input>
      </el-form-item>
       <el-form-item prop='agree'>
         <el-checkbox v-model="user.agree">我已阅读并同意用户协议和隐私条款</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button class="loginBtn" type="primary" @click="onLogin" :loading='loginLoading'>登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>

import { login } from '@/api/user'
export default {
  name: "LoginIndex",
  components: {},
  props: {},
  data() {
    return {
      user:{
        mobile:'13911111111',//手机号
        code:'246810',//验证码
        agree:false,
      },
      // checked:false ,//是否同意用户协议
      loginLoading: false, //登录状态
      rules: {        //表单验证规则配置
        //要校验的数据名称：规则列表[]
          mobile: [
            { required: true, message: '请输入手机号码', trigger: 'change' },
            { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的验证码格式'}
          ],
          code: [
             { required: true, message: '请输入验证码', trigger: 'change' },
            {pattern: /^\d{6}$/,message:'请输入正确的验证码格式'}
          ],
          agree:[
            {
              //自定义校验规则
              //验证通过：callback()
              //验证失败：callback(new Error('请同意用户协议'))
              validator:(rule,value,callback)=>{
                  if(value){
                      callback()
                  }else{
                    callback(new Error('请同意用户协议'))
                  }
              },
               trigger: 'change'
            },
          ]
      }
    }

  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
     onLogin() {
        //获取表单数据(根据接口数据绑定数据)
        // const user = this.user
        //表单验证
        //validate 是异步的
        this.$refs['loginForm'].validate(valid =>{
          //如果表单验证失败，停止请求提交
          if(!valid){return }
          //验证通过，请求登录
          this.login()
        })
        //验证通过，提交登录

      },
      login(){
        //开启登录中。。。
        this.loginLoading = true

        //对于代码中的请求操作
        //1.接口请求中可能需要重用
        //2.实际工作中，接口非常容易变动，改起来比较麻烦
        //建议把所有的请求都封装成函数然后统一管理
        // request({
        //   method:'POST',
        //   url:'/mp/v1_0/authorizations',
        //   //data 用来设置POST请求头
        //   data:this.user
        // })
        login(this.user).then(res => {
          //处理后端响应结果
          //登录成功
          this.loginLoading = false
          this.$message({
            message: '登录成功',
            type: 'success'
          });
          //本地存储字符串，只能存储字符串
          window.localStorage.setItem('user',JSON.stringify(res.data.data))
          // console.log(res)
          //跳转到首页
          // this.$router.push('/') //根据路径进行跳转
          this.$router.push({       //根据路由名字进行跳转
            name:'home'
          })
        }).catch(err => {
          this.loginLoading = false
          this.$message.error('登录失败')
          console.log('登录失败',err)
        })
      }
  }
};
</script>
<style scoped>
.loginContioner{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('./bg.png') no-repeat;
  background-size: cover ;
}
.loginForm{
    background-color: #ffffff;
    padding: 40px;
    min-width: 300px;
  }
.loginBtn{
  width: 100%;
}
.loginHead{
  height: 39px ;
  width: 100%;
  background: url(./logo_index.png) no-repeat;
  background-size: contain;
  margin-bottom: 20px;
}
</style>
