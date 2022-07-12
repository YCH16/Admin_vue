<template>
  <div style="height:50px;display:flex" class="header_div" >
    <img src="../../src/assets/XMULogo.png" height="40">
    <div style="width:200px;padding-left:10px;font-weight: bold;color:#ddd">
      考試后台管理系統
    </div>
    <div style="flex:1"></div>
    <div style="width:100px">
      <el-dropdown>
        <span class="el-dropdown-link" style="padding-left: 20px">
          用戶名
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="userInfo">账户信息</el-dropdown-item>
            <el-dropdown-item @click="logout">登出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { ArrowDown } from '@element-plus/icons-vue'
export default {
  name: "Header",
  components: {
    ArrowDown,
  },
  methods:{
    userInfo(){
      this.$router.push('/home');
    },
    logout(){

    }
  }
}
</script>

<style scoped>
.header_div {
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>