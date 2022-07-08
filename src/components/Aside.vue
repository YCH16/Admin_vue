<template>
  <div class="aside_container">
    <el-row class="tac">
      <el-col :span="12">

        <el-menu
            style="width:200px;min-height: calc(100% - 50px);height:auto"
            default-active="2"
            class="el-menu-vertical-demo"
            active-text-color="#ffd04b"
            background-color="#545c64"
            text-color="#fff"
            router

        ><!--:collapse="true"-->

          <el-menu-item index="/home">
            <el-icon><House /></el-icon>
            <span>主页</span>
          </el-menu-item>

          <el-sub-menu index="Page3">
            <template #title>
              <el-icon><User /></el-icon>
              <span>学生信息管理</span>
            </template>
            <el-menu-item index="Page3_1">学生信息</el-menu-item>
            <el-menu-item index="Page3_2">学生试卷查看</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="Page4">
            <template #title>
              <el-icon><Folder /></el-icon>
              <span>题库管理</span>
            </template>
            <el-menu-item index="../components/Menu/Page4_1">单选题</el-menu-item>
            <el-menu-item index="Page4_2">多选题</el-menu-item>
            <el-menu-item index="Page4_3">是非题</el-menu-item>
            <el-menu-item index="Page4_4">简答题</el-menu-item>
            <el-menu-item index="Page4_5">已提交试题</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="Page5">
            <template #title>
              <el-icon><Document /></el-icon>
              <span>专业信息管理</span>
            </template>
            <el-menu-item index="Page5_1">专业信息</el-menu-item>
          </el-sub-menu>

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