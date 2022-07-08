<template>

  <el-card class="box-card1" style="width: auto;margin-bottom: 20px">
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/Welcome' }">主页</el-breadcrumb-item>
    <el-breadcrumb-item>学生信息管理</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/Page3_1' }">学生信息</el-breadcrumb-item>
  </el-breadcrumb>
  </el-card>

  <el-card class="box-card2" style="width: auto">
  <h2 >学生信息</h2>
    <el-row :gutter="20">
      <el-col :span="6" >
        <el-form-item label="学号:" >
          <el-input v-model="input" placeholder="Please input" style="width: 330px;height:30px"/>
        </el-form-item>
      </el-col>
      <el-col :span="5" >
        <el-form-item label="姓名:">
          <el-input style="width: 330px;height:30px" placeholder="Please input" ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="5" >
        <el-form-item label="班级:">
          <el-select style="width: 330px;height:30px" ></el-select>
        </el-form-item>
      </el-col>
      <el-col :span="5" >
        <el-form-item label="专业:">
          <el-select style="width: 330px;height:30px" ></el-select>
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-button type="primary">查询 <el-icon style="margin:3px"><Search /></el-icon></el-button>
      </el-col>
    </el-row>

    <div style="display: flex">
      <el-button  style="width: 100%" >删除选中</el-button>
      <el-button  style="width: 100%" >批量增加</el-button>
    </div>



  <el-table :data="tableData"
            style="width: 100%" max-height="250"
            :default-sort="{ prop: 'Sno', order: 'descending' }"
            stripe
            @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="55"  />
    <el-table-column fixed prop="Sno" label="学号" width="150" sortable/>
    <el-table-column prop="name" label="姓名" width="120" />
    <el-table-column prop="sex" label="性别" width="120" />
    <el-table-column prop="phone" label="电话" width="120" />
    <el-table-column prop="mno" label="专业" width="120" />
    <el-table-column prop="class" label="班级" width="120" />
    <el-table-column prop="password" label="密码" width="120" />
    <el-table-column fixed="right" label="操作" width="150">
      <template #default="scope" style="display: flex">
        <el-button
            type="danger"
            size="small"
            @click.prevent="deleteRow(scope.$index)"
        >
          刪除
        </el-button>
        <el-button type="primary" size="small">修改</el-button>
      </template>
    </el-table-column>
  </el-table>
    <el-button style="width: 100%" @click="onAddItem">添加学生信息</el-button>
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
  name: "Page3_1",
  data(){
    return{
      Total:100,
      tableData:[
        {
          Sno:'22920202205201',
          name:'Mimi',
          sex:'女',
          class:'2-1',
          phone:'1894389234',
          password:'1890232',
          mno:'軟件工程'
        },
        {
          Sno:'22920202205202',
          name:'Mimi',
          sex:'女',
          class:'2-1',
          phone:'1894389234',
          password:'1890232',
          mno:'軟件工程'
        },
        {
          Sno:'22920202205203',
          name:'Mimi',
          sex:'女',
          class:'2-1',
          phone:'1894389234',
          password:'1890232',
          mno:'軟件工程'
        },
      ]
    }
  },
  methods:{
    onAddItem(){

    },
    deleteRow(){

    }
  },

}
</script>

<style scoped>

</style>