<template>
  <el-card class="box-card1" style="margin-bottom:20px ">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/Welcome' }">主页</el-breadcrumb-item>
      <el-breadcrumb-item>学生信息管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Page3_2' }">学生试卷查看</el-breadcrumb-item>
    </el-breadcrumb>
  </el-card>

  <el-card class="box-card2" style="width: auto">
    <h2 align="center">学生试卷</h2>
    <el-form>
      <el-row :gutter="20">
        <el-col :span="8" >
          <el-form-item label="学号:" >
            <el-input v-model="username" placeholder="输入查询学号" style="width: 330px;height:30px"/>
          </el-form-item>
        </el-col>
        <el-col :span="8" >
          <el-form-item label="班级:">
            <el-input v-model="classname" style="width: 330px;height:30px" placeholder="输入查询班级" ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8" >
          <el-form-item label="姓名:">
            <el-input v-model="truename" style="width: 330px;height:30px" placeholder="输入查询姓名" ></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="8" >
          <el-form-item label="试卷编号:" >
            <el-input v-model="pid" placeholder="输入查询试卷编号" style="width: 300px;height:30px"/>
          </el-form-item>
        </el-col>
        <el-col :span="8" >
          <el-form-item label="专业:">
            <el-input v-model="coll" style="width: 330px;height:30px" placeholder="输入查询专业" ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="1.5">
          <el-button type="primary" @click="load">查询 <el-icon style="margin:5px"><Search /></el-icon></el-button>
        </el-col>
        <el-col :span="1">
          <el-button type="primary" @click="reset">重置 <el-icon style="margin:5px"><Search /></el-icon></el-button>
        </el-col>
      </el-row>
    </el-form>

    <el-table
        ref="multipleTableRef"
        :data="tableData"
        style="width:auto"
        :span-method="objectSpanMethod"
        @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="120" />
      <el-table-column fixed prop="username" label="学号" width="100" sortable/>
      <el-table-column prop="truename" label="姓名" width="100" />
      <el-table-column prop="gender" label="性别" width="80" />
      <el-table-column prop="tele" label="电话" width="150" />
      <el-table-column prop="coll" label="专业方向" width="120" />
      <el-table-column prop="classname" label="班级" width="100" />
      <el-table-column prop="pid" label="试卷编号" width="100" />
      <el-table-column prop="time" label="答题时间" width="200" />
      <el-table-column fixed="right" label="操作" width="150">
        <template #default="scope" style="display: flex">
          <el-button type="info" size="small" @click="handle(scope.row.pid)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div style="display: flex">
      <el-button style="width: 100%" @click="deleteRows">删除选中</el-button>
    </div>
  </el-card>



  <div class="demo-pagination-block" style=" margin-top: 20px ">
    <el-pagination
        v-model:currentPage="pageNum"
        v-model:page-size="pageSize"
        :page-sizes="[5,10, 20, 30, 40, 50]"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </div>
</template>
<script>
import request from "../../../utils/request";

export default {
  name: "学生试卷查看",
  data(){
    return{
      pageNum:1,
      pageSize:5,
      total:0,
      form:{},
      tableData:[],
      username: '',
      classname: '',
      truename: '',
      pid:'',
      coll:''
    }
  },
  created() {
    //请求分页查询数据
    this.load()
  },
  methods:{
    load() {
      request.get("http://localhost:8082/user/paper",{
        params:{
          pageNum:this.pageNum,
          pageSize:this.pageSize,
          username:this.username,
          classname:this.classname,
          truename:this.truename,
          pid:this.pid,
          coll:this.coll
        }
      }).then(res =>{
        console.log(res)

        this.tableData=res.data
        this.total=res.total

      })

    },
    reset(){
      this.username=""
      this.classname=""
      this.truename=""
      this.pid=""
      this.coll=""
      this.load()
    },
    handle(pid){
      // this.$router.push('/Page3_3')

      this.$router.push(
          {path:'/Page3_3', query: {pid:pid}}
      )
    },
    CheckTheTest(){

    },
    handleSizeChange(pageSize){
      console.log(pageSize)
      this.pageSize = pageSize
      this.load()
    },
    handleCurrentChange(pageNum){
      console.log(pageNum)
      this.pageNum = pageNum
      this.load()
    },
    handleSelectionChange(val){
      this.multipleSelection=val
    },
    deleteRows(){
      //批量刪除
      let pids=this.multipleSelection.map(v=>v.pid)
      console.log(pids.toString())
      request.post("http://localhost:8082/user/delpapers",pids.toString()).then(res=>{
        console.log(res)
        if(res){
          this.$message.success("批量删除成功！")
          this.load()
        } else {
          this.$message.error("批量删除失败！")
        }
      })
    }


  }
}
</script>

<style scoped>

</style>