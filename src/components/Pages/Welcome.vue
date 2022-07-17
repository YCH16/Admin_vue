<template>
  <el-row :gutter="20">
    <el-col :span="24">
      <el-card class="box-card2" style="margin-bottom:20px;height: auto;">
        <h2>欢迎登入</h2>
        <div>
          <el-form>
            <el-form-item label="身分:" style="width: 300px" :model="UserInfoForm">
              <el-input disabled placeholder="管理员" />
            </el-form-item>
            <el-form-item label="账户:" >
              <el-input v-model="UserInfoForm.username" :disabled="disableusername"/>
            </el-form-item>
            <el-form-item label="密码:" >
              <el-input v-model="UserInfoForm.password" :disabled="disablepassword"/>
            </el-form-item>
            <el-form-item style="display: flex ">
              <span style="flex: 1;"></span>
              <el-button type="danger" @click="modify()">修改</el-button>
              <el-button type="success" @click="save()">保存</el-button>
            </el-form-item>
          </el-form>
        </div>
        </el-card>
    </el-col>
  </el-row>
</template>

<script>
import request from "../../../utils/request";
import axios from "axios";

export default {
  name: "Welcome",
  data(){
    return{
      disableusername:true,
      disablepassword:true,
      UserInfoForm:{
        username:'',
        password:''
      },
    }
  },
  created() {
    this.load();
  },
  methods:{

    load(){
      this.axios.get('http://localhost:8081/admin/get').then(res=>{
        console.log(res.data);
        this.UserInfoForm.username=res.data.username;
        this.UserInfoForm.password=res.data.password;
      });
    },
    modify(){
      this.disablepassword=false;
    },
    save(){
      this.axios.post('http://localhost:8081/admin',this.UserInfoForm).then(res=>{
        if(res){
          this.$message.success("修改成功");
        }
        else{
          this.$message.error("修改失败");
        }
      })
      this.disablepassword=true;
    }
  }
}
</script>

<style scoped>

</style>