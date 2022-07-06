<template>
  <el-card class="box-card1" style="margin-bottom:20px">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/Welcome' }">主页</el-breadcrumb-item>
      <el-breadcrumb-item>考生成绩管理</el-breadcrumb-item>
    </el-breadcrumb>
  </el-card>

  <el-card class="box-card2" style="margin-bottom:20px ">
    <h2 align="center">考生成绩管理</h2>
    <el-row :gutter="20">
      <el-col :span="6" >
        <el-form-item label="学号:" >
          <el-select style="width: 330px;height:30px" ></el-select>
        </el-form-item>
      </el-col>
      <el-col :span="6" >
        <el-form-item label="班级:">
          <el-select style="width: 330px;height:30px" ></el-select>
        </el-form-item>
      </el-col>
      <el-col :span="6" >
        <el-form-item label="姓名:">
          <el-select style="width: 330px;height:30px" ></el-select>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-button type="primary">查询 <el-icon style="margin:5px"><Search /></el-icon></el-button>
      </el-col>
    </el-row>

    <el-table :data="tableData" style="width: 100%" stripe>
      <el-table-column prop="sid" label="学号" width="100"></el-table-column>
      <el-table-column prop="mno" label="专业" width="150"></el-table-column>
      <el-table-column prop="classid" label="班级" width="150"></el-table-column>
      <el-table-column prop="pname" label="试卷名称" width="150"></el-table-column>
      <el-table-column prop="score" label="个人成绩" width="150"></el-table-column>
      <el-table-column prop="zscore" label="试卷总分数" width="150"></el-table-column>
      <el-table-column prop="tjtime" label="个人考试时间" width="150"></el-table-column>
      <el-table-column label="操作" width="180">
        <el-button type="info" size="small" @click="Browser">预览</el-button>
        <el-button type="primary" size="small" @click="Download">下载</el-button>
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
  name: "Page6",
  data(){
    return{
      currentPage:1,
      pageSize:10,
      Total:10,

      tableData:[
        {sid:'1', mno:'軟件工程', classid:'2324', pname:'期末考', score:98, zscore:100, tjtime:'2022/6/23',},
        {sid:'2', mno:'軟件工程', classid:'2324', pname:'期末考', score:95, zscore:100, tjtime:'2022/6/23',},
        {sid:'2', mno:'軟件工程', classid:'2324', pname:'期末考', score:95, zscore:100, tjtime:'2022/6/23',},
        {sid:'2', mno:'軟件工程', classid:'2324', pname:'期末考', score:95, zscore:100, tjtime:'2022/6/23',},
        {sid:'2', mno:'軟件工程', classid:'2324', pname:'期末考', score:95, zscore:100, tjtime:'2022/6/23',},
        {sid:'2', mno:'軟件工程', classid:'2324', pname:'期末考', score:95, zscore:100, tjtime:'2022/6/23',},
      ]
    }
  },
  methods:{
    handleSizeChange(){

    },
    handleCurrentChange(){

    },
    CheckTheTest(){

    },
    DeleteTheTest(){

    },
    Browser(){

    }
  }
}
</script>

<style scoped>

</style>