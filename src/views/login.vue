<script setup>
  import { reactive } from 'vue-demi';
  import { Avatar, Key } from '@element-plus/icons';
  import { adminLogin } from '../utils/adminAPI';
  const loginform = reactive({
    username: '',
    password: ''
  })

  function admin_login(){
    console.log('Login!');
    adminLogin().then( res => {
      console.log(res.data.res);
      loginform.username = res.data.res;
    });
  }
</script>

<template>
  <div class="loginCard">
    <el-card class="box-card">
      <div class="loginTitle">
        <p>Login in</p>
      </div>
      <div class="loginForm">
        <el-space direction="vertical" alignment="stretch" style="width:400px;" :size="25">
          <el-row :gutter="10">
            <el-col :span="24">
              <el-input
                id="username"
                v-model="loginform.username"
                placeholder="Username"
                :prefix-icon="Avatar"
              />
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="24">
              <el-input
                id="username"
                v-model="loginform.password"
                placeholder="Password"
                :prefix-icon="Key"
              />
            </el-col>
          </el-row>
        </el-space>
      </div>
      <div class="loginButton">
        <el-button class="login" type="primary" @click="admin_login()">Login</el-button>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  .loginCard{
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: red; */
    height: 100vh;
  }

  .box-card {
    width: 480px;
    height: 360px;
    /* background: red; */
    margin-bottom: 150px;
    border-radius: 15px;
  }

  .box-card .loginTitle{
    margin-top: 30px;
    font-size: 30px;
    font-weight: 600;
    text-align: center;
  }
  .box-card .loginForm{
    margin-top: 30px;
    text-align: center;
  }

  .box-card .loginForm label{
    line-height: 40px;
    font-size: 20px;
  }
  
  .box-card .loginButton{
    text-align: center;
  }

  .box-card .loginButton .login{
    /* background: rgb(231, 225, 225); */
    margin-top: 15px;
    font-size: 20px;
    font-weight: 500;
    width: 100px;
  }
</style>