<template>
  <el-card class="box-card1" style="margin-bottom:20px ">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/Welcome' }">主页</el-breadcrumb-item>
      <el-breadcrumb-item>学生信息管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Page5_1' }">学生试卷查看</el-breadcrumb-item>
    </el-breadcrumb>
  </el-card>

  <el-card class="box-card2" style="width: auto">
    <h2>学生试卷</h2>

    <el-row :gutter="20">
      <el-col :span="7" >
        <el-form-item label="学号:" >
          <el-input v-model="input" placeholder="Please input" style="width: 330px;height:30px"/>
        </el-form-item>
      </el-col>
      <el-col :span="6" >
        <el-form-item label="班级:">
          <el-select style="width: 330px;height:30px" ></el-select>
        </el-form-item>
      </el-col>
      <el-col :span="6" >
        <el-form-item label="姓名:">
          <el-input style="width: 330px;height:30px" placeholder="Please input" ></el-input>
        </el-form-item>
      </el-col>
    </el-row>



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
        :span-method="objectSpanMethod"

        @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="120" />
      <el-table-column fixed prop="Sno" label="学号" width="150" sortable/>
      <el-table-column prop="name" label="姓名" width="120" />
      <el-table-column prop="sex" label="性别" width="120" />
      <el-table-column prop="phone" label="电话" width="120" />
      <el-table-column prop="mno" label="专业方向" width="120" />
      <el-table-column prop="class" label="班级" width="120" />
      <el-table-column prop="testNo" label="试卷编号" width="120" />
      <el-table-column prop="time" label="答题时间" width="120" />
      <el-table-column fixed="right" label="操作" width="150">
        <template #default="scope" style="display: flex">
          <el-button type="info" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div style="display: flex">
      <el-button style="width: 100%" >删除选中</el-button>
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
  name: "Page3_2",
  data(){
    return{
      currentPage:1,
      pageSize:10,
      Total:10,

      tableData:[
        {

        },
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