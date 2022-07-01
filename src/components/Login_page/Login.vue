<template>
  <div class="login_container">
    <div class="login_box">
      <div class="title">登錄</div>
      <div>
        <el-form label-width="0px" class="login_Form" :model="loginFrom" :rules="loginFromRules" ref="loginFromRef">
          <el-form-item prop="username">
            <el-input prefix-icon="Avatar" style="width: 330px;height:45px" v-model="loginFrom.username" placeholder="請輸入用戶名" type="username"/>
          </el-form-item>
          <el-form-item prop="password">
            <el-input prefix-icon="Lock" style="width: 330px;height:45px" v-model="loginFrom.password" placeholder="請輸入密碼" type="password"/>
          </el-form-item>
          <el-form-item>
            <el-checkbox label="記住密碼" name="type" />
            <a style="font-size:14px;padding-left: 195px;color: dodgerblue">忘記密碼</a>
          </el-form-item>
        </el-form>
      </div>
      <el-button type="success" class="login_button" @click="login">登錄</el-button>
    </div>
  </div>

</template>

<script>
import { Avatar,Lock} from '@element-plus/icons-vue'
export default {
  name: "Login",
  components:{
    Avatar,
    Lock
  },
  data(){
    //登入表單的數據對象
    return{
      loginFrom:{
        username:'mi',
        password:'123'
      },
      //表單的驗證規則對象
      loginFromRules: {
        //驗證用戶名是否合法
        username: [
          {required: true, message: '用戶名不能为空', trigger: 'blur'}
        ],
        //驗證密碼是否合法
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'},
          {min: 6, max: 16, message: '密码应为6-16位的长度', trigger: 'blur'}
        ]
      }
    }
  },
  methods:{
    login(){
      //先獲得表單的引用對象,拿引用對象獲得繳驗函數
      this.$refs.loginFromRef.validate((valid)=>{
        console.log(valid);
        if(!valid)return;

      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container{
  background-color:darkseagreen;
  height:100vh
}
.login_box{
  width:420px;
  height:450px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  box-shadow: 0 0 20px gray;
}
.title{
  font-weight: bold;
  font-size: 30px;
  position:  absolute;
  top:8%;
  left:50%;
  transform: translate(-50%,0%);
}
.login_button{
  width:300px;
  height:50px;
  position: absolute;
  top:85%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: cornflowerblue;
}
.login_Form{
  position: absolute;
  top:30%;
  padding:0 40px;
  box-sizing: border-box;
}
</style>