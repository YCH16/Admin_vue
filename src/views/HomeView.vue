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
import Page2_1 from "@/components/Pages/Page2_1";
import Page2_2 from "@/components/Pages/Page2_1";
import Page3_1 from "@/components/Pages/Page2_1";
export default {
  name: 'HomeView',
  components: {
    Page2_1,
    Page2_2,
    Page3_1,
    Aside,
    Header
  }
}
</script>
