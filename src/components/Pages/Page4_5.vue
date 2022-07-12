<template>
  <el-card class="box-card1" style="margin-bottom:20px">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/Welcome' }">主页</el-breadcrumb-item>
      <el-breadcrumb-item>试卷管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Page4_5' }">已提交试题</el-breadcrumb-item>
    </el-breadcrumb>
  </el-card>

  <el-card class="box-card2" style="margin-bottom:20px ">
    <h2 align="center">已提交试题</h2>
    <el-form :model="search">
    <el-row :gutter="20">
      <el-col :span="9" >
        <el-form-item label="专业:"  v-model="search.mname">
          <el-select style="width: 330px;height:30px" ></el-select>
        </el-form-item>
      </el-col>
      <el-col :span="9" >
        <el-form-item label="问题类型:" v-model="search.Qtype" >
          <el-select style="width: 330px;height:30px" ></el-select>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-button type="primary">查询 <el-icon style="margin:5px"><Search /></el-icon></el-button>
      </el-col>
    </el-row>
    </el-form>

    <el-table :data="tableData" style="width: 100%" stripe>
      <el-table-column type="selection" width="100" />
      <el-table-column prop="eid" label="试题ID" width="170"></el-table-column>
      <el-table-column prop="mno" label="专业" width="200"></el-table-column>
      <el-table-column prop="tno" label="问题类型" width="200"></el-table-column>
      <el-table-column label="操作" style="display: flex" width:auto>
        <el-button type="info" size="small" @click="Browser">预览题目</el-button>
        <el-button type="primary" size="small" @click="CheckTheTest">编辑题目</el-button>
        <el-button type="danger" size="small" @click="DeleteTheTest">删除题目</el-button>
      </el-table-column>
    </el-table>
    <div style="display: flex">
      <el-button style="width: 100%" >删除选中</el-button>
    </div>
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
  name: "Page4_5",
  data(){
    return{
      currentPage:1,
      pageSize:10,
      Total:10,
      search:{},
      tableData:[
        {
          eid:'1',
          mno:'軟件工程',
          cname:'Java',
          tno:'單選題',
        },
        {
          eid:'2',
          mno:'軟件工程',
          cname:'數據庫',
          tno:'多選題',
        }
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