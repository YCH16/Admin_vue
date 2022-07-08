<template>
  <el-card class="box-card1" style="margin-bottom:20px ">
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/Welcome' }">主页</el-breadcrumb-item>
    <el-breadcrumb-item>专业信息管理</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/Page5_1' }">专业信息</el-breadcrumb-item>
  </el-breadcrumb>
    </el-card>

    <el-card class="box-card2" style="width: auto">
      <h2 align="center">专业列表</h2>
      <el-row :gutter="20">
        <el-col :span="7" >
          <el-form-item label="专业编号:" >
            <el-input v-model="input" placeholder="Please input" style="width: 330px;height:30px"/>
          </el-form-item>
        </el-col>
        <el-col :span="6" >
          <el-form-item label="专业:">
            <el-select style="width: 330px;height:30px" ></el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">查询 <el-icon style="margin:5px"><Search /></el-icon></el-button>
        </el-col>
      </el-row>

      <el-table
          ref="multipleTableRef"
          :data="tableData"
          style="width:auto"
          @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="120" />
        <el-table-column label="专业编号" width="400"/>
        <el-table-column label="专业名" width="400"/>
      </el-table>

      <div style="display: flex">
        <el-button  style="width: 100%" >删除选中</el-button>
        <el-button  style="width: 100%" >添加专业方向</el-button>
      </div>

    </el-card>
    <div class="demo-pagination-block" style=" margin-top: 20px ">
      <el-pagination
          v-model:currentPage="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 30, 40, 50]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="Total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </div>
</template>
<script>
export default {
  name: "Page5_1",
  data(){
    return{
      currentPage:1,
      pageSize:10,
      Total:10,

      tableData:[
        {

        }
      ]
    }
  },
  methods:{
    CheckTheTest(){

    },
    handleSizeChange(){

    },
    handleCurrentChange(){

    }
  }
}
</script>

<style scoped>

</style>