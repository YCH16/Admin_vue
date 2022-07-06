<template>
  <el-card class="box-card1" style="width: auto;margin-bottom: 20px">
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/Welcome' }">主页</el-breadcrumb-item>
    <el-breadcrumb-item>教师信息管理</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/Page2_1' }">教师信息修改</el-breadcrumb-item>
  </el-breadcrumb>
    </el-card>

  <el-card class="box-card2" style="width: auto">
    <h2 align="center">教师信息</h2>
    <el-form class="info_Form">
      <el-form-item label="姓名:" style="display:flex;padding-left: 12px">
        <el-input style="width: 330px;height:30px" ></el-input>
      </el-form-item>
      <el-row :span="2">
        <el-form-item label="职工号:" style="left:30px">
          <el-input style="width: 330px;height:30px" ></el-input>
        </el-form-item>
        <el-form-item label="密码:" style="left:30px;padding-left: 30px">
          <el-input style="width: 330px;height:30px" ></el-input>
        </el-form-item>
      </el-row>
      <el-form-item label="生理性别:" style="padding-left: 0px">
        <div class="mb-2 flex items-center text-sm">
          <el-radio-group v-model="radio1" class="ml-4">
            <el-radio label="1" size="large">男</el-radio>
            <el-radio label="2" size="large">女</el-radio>
          </el-radio-group>
        </div>
      </el-form-item>

      <el-row :span="11">
        <el-form-item label="职称:" style="padding-left: 12px">
          <el-input style="width: 330px;height:30px" ></el-input>
        </el-form-item>
        <el-form-item label="所属院系:" style="left:30px;padding-left: 30px">
          <el-input style="width: 330px;height:30px" ></el-input>
        </el-form-item>
      </el-row>

      <el-form-item label="年龄:" style="padding-left: 12px">
        <el-input-number v-model="num" :min="1" :max="150" @change="handleChange" />
      </el-form-item>

      <el-form-item label="手机:" style="padding-left: 12px">
        <el-input style="width: 330px;height:30px" ></el-input>
      </el-form-item>

      <el-form-item label="身分证号:" style="left:30px">
        <el-input style="width: 316px;height:30px" ></el-input>
      </el-form-item>
      <div style="display: flex;padding-left: 45%">
        <el-button type="primary" class="update_button" @click="update" >修改</el-button>
        <el-button type="success" class="save_button" @click="save">保存</el-button>
      </div>
    </el-form>
  </el-card>

</template>

<script>
import { ArrowRight } from '@element-plus/icons-vue'
export default {
  name: "Page2_1",
  components: {
    ArrowRight,
  },
  data(){

  },
  methods:{
    update(){

    },
    save(){

    },
    handleChange(age){
      console.log(age)
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.info_Form{
  position: relative;
  padding:0 25px;
  box-sizing: border-box;
}
</style>