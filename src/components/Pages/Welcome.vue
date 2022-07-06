<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <el-card class="box-card1" style="margin-bottom:20px;height: 100px">
        <div style="display: flex">
          <el-icon style="font-size: 30px;margin-top:15px"><School style="color:seagreen;"/></el-icon>
          <div style="display: flex">
          <h3 style="margin-left: 10px">任教班级:</h3>
          <h3 style="margin-left: 10px;text-align: center">軟工2班</h3>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">

      <el-card class="box-card1" style="margin-bottom:20px;height: 100px">
        <div style="display: flex">
        <el-icon style="font-size: 30px;margin-top:15px"><UserFilled style="color:cornflowerblue;"/></el-icon>
          <h3 style="margin-left: 10px;">班级人数:</h3><h3 style="margin-left: 10px;text-align: center">20</h3>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card class="box-card1" style="margin-bottom:20px;height: 100px">
        <div style="display: flex">
        <el-icon style="font-size: 30px;margin-top:15px"><EditPen style="color:Red;"/></el-icon>
        <h3 style="margin-left: 10px">待批改题量:</h3> <h3 style="margin-left: 10px;text-align: center">20</h3>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">

      <el-card class="box-card1" style="margin-bottom:20px;height: 100px">
        <div style="display: flex">
        <el-icon style="font-size: 30px;margin-top:15px"><List style="color:dodgerblue;"/></el-icon>
        <h3 style="margin-left: 10px">题目总数:</h3><h3 style="margin-left: 10px;text-align: center">20</h3>
      </div>
      </el-card>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="24">
      <el-card class="box-card1" style="margin-bottom:20px;height: 350px;">
        <h2>学生成绩分布
        </h2>
        <el-row :gutter="20">
        <el-col :span="7" >
          <el-form-item label="学科:" >
            <el-select style="width: 330px;height:30px" ></el-select>
          </el-form-item>
        </el-col>
        <el-col :span="7" >
          <el-form-item label="班级:">
            <el-select style="width: 330px;height:30px" ></el-select>
          </el-form-item>
        </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>

export default {
  name: "Welcome"
}
</script>

<style scoped>

</style>