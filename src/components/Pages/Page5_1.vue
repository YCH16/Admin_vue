<template>
  <el-card class="box-card1" style="margin-bottom:20px ">
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/Welcome' }">主页</el-breadcrumb-item>
    <el-breadcrumb-item>试卷管理</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/Page5_1' }">主观题打分</el-breadcrumb-item>
  </el-breadcrumb>
    </el-card>

  <el-card class="box-card2" style="margin-bottom:20px ">
    <h2 align="center">批改列表</h2>
    <el-row :gutter="20">
      <el-col :span="9" >
        <el-form-item label="学科:" >
          <el-select style="width: 330px;height:30px" ></el-select>
        </el-form-item>
      </el-col>
      <el-col :span="9" >
        <el-form-item label="班级:">
          <el-select style="width: 330px;height:30px" ></el-select>
        </el-form-item>
      </el-col>
        <el-col :span="4">
          <el-button type="primary">查询 <el-icon style="margin:5px"><Search /></el-icon></el-button>
        </el-col>
    </el-row>

    <el-table :data="tableData" style="width: 100%" fit>
      <el-table-column prop="eid" label="考试ID" width="150"></el-table-column>
      <el-table-column prop="pname" label="试卷名称" width="150"></el-table-column>
      <el-table-column prop="cname" label="课程" width="150"></el-table-column>
      <el-table-column prop="classname" label="班级" width="150"></el-table-column>
      <el-table-column prop="student" label="考生姓名" width="150"></el-table-column>
      <el-table-column prop="examtime" label="试卷提交时间" width="150"></el-table-column>
      <el-table-column label="操作">
          <el-button size="small" @click="CheckTheTest" type="danger">批改</el-button>
      </el-table-column>
    </el-table>
  </el-card>

  <div class="demo-pagination-block">
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
          eid:'1',
          pname:'Java期末考',
          cname:'Java',
          classname:'1',
          student:'Mimi',
          examtime:'6/17'
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