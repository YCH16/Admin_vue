<template>
  <div class="login_container">
    <div class="login_box_left">
      <div style="height: 40px; width:220px;border-bottom: solid;margin-top: 35%;margin-left: 20%;padding-left: 15px;color:#fff">
        <h2 style="color:#fff;">考试后台管理系统</h2>
    </div>
    </div>
    <div class="login_box_right">
      <div class="title">登录</div>
      <div>
        <el-form label-width="0px" class="login_Form" :model="loginFrom" :rules="loginFromRules" ref="loginFromRef">
          <el-form-item prop="username">
            <el-input prefix-icon="Avatar" style="width: 330px;height:45px" v-model="loginFrom.username" placeholder="请输入用户名" type="username"/>
          </el-form-item>
          <el-form-item prop="password">
            <el-input prefix-icon="Lock" style="width: 330px;height:45px" v-model="loginFrom.password" placeholder="请输入密码" type="password" show-password/>
          </el-form-item>
          <el-form-item>
            <a style="font-size:14px;color: dodgerblue" href="http://localhost:8002/login">切换到学生端登录</a>
          </el-form-item>
        </el-form>
      </div>
      <el-button type="success" class="login_button" @click="login">登录</el-button>
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
        username:'',
        password:''
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
          //{min: 1, max: 30, message: '密码应为1-30位的长度', trigger: 'blur'}
        ]
      }
    }
  },
  methods:{
    login(){
      //先獲得表單的引用對象,拿引用對象獲得校驗函數
      this.$refs.loginFromRef.validate((valid)=>{
        //console.log(valid);
        if(!valid)return;
        else{
          this.axios.post('http://localhost:8082/admin/login',this.loginFrom).then(res=>{
            if(res.data.code==='200'){
              this.$message.success("login success")
              window.sessionStorage.setItem('token',res.data.data.token);
              this.$router.push('/AdminHome');
              //window.open("http://localhost:8082/login","_blank")
            }
            else{
              this.$message.error("用户名或密码错误!!");
            }
          });
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_box_right{
  width:420px;
  height:450px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  top:50%;
  left: 70%;
  transform: translate(-50%,-50%);
  box-shadow: 0 0 20px gray;
  flex: 1;
}
.login_box_left{
  width:500px;
  height:450px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  position: absolute;
  top:50%;
  left: 40%;
  transform: translate(-50%,-50%);
  box-shadow: 0 0 20px gray;
  flex: 1;
}
.login_container{
  background: url('../../assets/Admin_login_background.jpeg') no-repeat center;
  height:100vh;

}
.login_container::after{
   filter: blur(1px);
   z-index: -1;
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