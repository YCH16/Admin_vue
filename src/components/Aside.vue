<template>
  <div>
    <el-row class="tac">
      <el-col :span="12">

        <el-menu
            style="width:200px; min-height: calc(100vh - 50px)"
            default-active="2"
            class="el-menu-vertical-demo"
            active-text-color="#ffd04b"
            background-color="#545c64"
            text-color="#fff"
            router
        >

          <el-menu-item index="/home">
            <el-icon><icon-menu /></el-icon>
            <span>主页</span>
          </el-menu-item>

          <el-sub-menu index="2">
            <template #title>
              <el-icon><location /></el-icon>
              <span>教师信息管理</span>
            </template>
            <el-menu-item index="Page2_1">教师信息修改</el-menu-item>
            <el-menu-item index="Page2_2">教师信息查询</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="3">
            <template #title>
              <el-icon><document /></el-icon>
              <span>考生信息管理</span>
            </template>
            <el-menu-item index="Page3_1">考生信息修改</el-menu-item>
            <el-menu-item index="Page3_2">考生信息查询</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="4">
            <template #title>
              <el-icon><document /></el-icon>
              <span>课程信息管理</span>
            </template>
            <el-menu-item index="Page4_1">课程信息修改</el-menu-item>
            <el-menu-item index="Page4_2">课程信息查询</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="5">
            <template #title>
              <el-icon><document /></el-icon>
              <span>题库管理</span>
            </template>
            <el-menu-item index="../components/Menu/Page5_1">单选题</el-menu-item>
            <el-menu-item index="Page5_2">多选题</el-menu-item>
            <el-menu-item index="Page5_3">是非题</el-menu-item>
            <el-menu-item index="Page5-4">简答题</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="6">
            <template #title>
              <el-icon><icon-menu /></el-icon>
              <span>试卷管理</span>
            </template>
            <el-menu-item index="Page6-1">主观题打分</el-menu-item>
          </el-sub-menu>

          <el-menu-item index="7">
            <el-icon><icon-menu /></el-icon>
            <span>考生成绩管理</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: "Aside",
  data(){
    return{

    }
  },
}
</script>

<style scoped>

</style>