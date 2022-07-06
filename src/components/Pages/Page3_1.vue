<template>

  <el-card class="box-card1" style="width: auto;margin-bottom: 20px">
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/Welcome' }">主页</el-breadcrumb-item>
    <el-breadcrumb-item>考生信息管理</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/Page3_1' }">考生信息</el-breadcrumb-item>
  </el-breadcrumb>
  </el-card>

  <el-card class="box-card2" style="width: auto">
  <h2 >考生信息</h2>
  <el-table :data="tableData" style="width: 100%" max-height="250">
    <el-table-column fixed prop="Sno" label="学号" width="150" />
    <el-table-column prop="name" label="姓名" width="120" />
    <el-table-column prop="sex" label="性别" width="120" />
    <el-table-column prop="class" label="班级" width="120" />
    <el-table-column prop="phone" label="电话" width="600" />
    <el-table-column fixed="right" label="刪除" width="120">
      <template #default="scope">
        <el-button
            link
            type="primary"
            size="small"
            @click.prevent="deleteRow(scope.$index)"
        >
          Remove
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-button class="mt-4" style="width: 100%" @click="onAddItem">添加学生信息</el-button>
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
        }
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