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
              <el-input v-model="UserInfoForm.username"/>
            </el-form-item>
            <el-form-item label="密码:" >
              <el-input v-model="UserInfoForm.password"/>
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

export default {
  name: "Welcome",
  data(){
    return{
      UserInfoForm:{
        username:'admin',
        password:'93248023984023'
      },
    }
  },
  methods:{
    modify(){

    },
    save(){

    }
  }
}
</script>

<style scoped>

</style>