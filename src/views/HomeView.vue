<template>
  <div class="home">
      <el-container>
        <!--頁面頭部-->
        <el-header style="height: 50px"><Header/></el-header>
        <!--頁面主體區域-->
        <el-container>
          <!--側邊欄-->
          <el-aside width="200px"><Aside/></el-aside>
          <!--右邊內容主體-->
          <el-main><router-view/></el-main>
        </el-container>
      </el-container>
  </div>
</template>

<style scoped>
.el-header{
  background-color:cornflowerblue;
}
</style>

<script>
import Aside from "@/components/Aside";
import Header from "@/components/Header";
export default {
  name: 'HomeView',
  components: {
    Aside,
    Header
  }
}
</script>
