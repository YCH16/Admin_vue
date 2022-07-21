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
    <el-form>
      <el-row :gutter="20">

        <el-col :span="6" >
          <el-form-item label="专业:" >
            <el-input style="width: 200px" placeholder="请输入专业" suffix-icon="el-icon-search" v-model="mname"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="6" >
          <el-form-item label="题目类型:" >
            <el-input style="width: 200px" placeholder="请输入题目类型" suffix-icon="el-icon-search" v-model="type"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" >
          <el-form-item label="题目:" >
            <el-input style="width: 200px" placeholder="请输入题目" suffix-icon="el-icon-search" v-model="content"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="1.5">
          <el-button type="primary" @click="load">查询</el-button>
        </el-col>
        <el-col :span="1">
          <el-button type="primary" @click="reset">重置</el-button>
        </el-col>
      </el-row>
    </el-form>

    <el-table :data="tableData" style="width: 100%" stripe @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="60" />
      <el-table-column prop="sid" label="试题ID" width="70"></el-table-column>
      <el-table-column prop="mname" label="专业" width="140"></el-table-column>
      <el-table-column prop="type" label="问题类型" width="100"></el-table-column>
      <el-table-column prop="content" label="题目" width="590"></el-table-column>
      <el-table-column prop="score" label="分数" width="60"></el-table-column>
      <el-table-column label="操作"  width="200" align="center">
        <template #default="scope" style="display: flex">
          <el-popconfirm title="确认删除吗？" @confirm="DeleteTheTest(scope.row.sid)">
            <template #reference>
              <el-button type="danger" size="small">删除题目</el-button>
            </template>
          </el-popconfirm>
          <el-button type="primary" size="small" @click="CheckTheTest(scope.row)">编辑题目</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div style="display: flex">
      <el-button style="width: 100%" @click="deleteRows">删除选中</el-button>
    </div>
  </el-card>

  <div class="demo-pagination-block">
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

  <el-dialog title="编辑题目" v-model="dialogFormVisible" width="30%">
    <el-form label-width="80px" size="default">
      <el-form-item label="专业">
        <el-input v-model="form.mname" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="问题类型">
        <el-input v-model="form.type" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="题目">
        <el-input v-model="form.content" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="分值">
        <el-input v-model="form.score" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </div>
  </el-dialog>

</template>

<script>
import request from "../../../utils/request";

export default {
  name: "已提交试题",
  data(){
    return{
      total:0,
      tableData:[],
      pageNum:1,
      pageSize:5,
      content:"",
      mname:"",
      type:"",
      score:'',
      dialogFormVisible:false,
      form:{
        mname:'',
        type:'',
        content:'',
        score:''
      },
      multipleSelection:[]
    }
  },
  created() {
    //请求分页查询数据
    this.load()
  },
  methods:{
    load() {

      request.get("http://localhost:8082/user/page",{
        params:{
          pageNum:this.pageNum,
          pageSize:this.pageSize,
          mname:this.mname,
          type:this.type,
          content:this.content
        }
      }).then(res =>{
        console.log(res)

        this.tableData=res.data
        this.total=res.total


      })

    },
    reset(){
      this.content=""
      this.mname=""
      this.type=""
      this.load()
    },
    handleSizeChange(pageSize){
      // console.log(pageSize)
      this.pageSize = pageSize
      this.load()
    },
    handleCurrentChange(pageNum){
      // console.log(pageNum)
      this.pageNum = pageNum
      this.load()
    },
    CheckTheTest(row){
      this.form=row
      this.dialogFormVisible=true

    },

    DeleteTheTest(sid){
      request.delete("http://localhost:8082/user/"+sid).then(res =>{
        if(res){
          this.$message.success("删除成功！")
          this.load()
        } else{
          this.$message.error("删除失败！")
        }
      })
    },


    save(){
      this.dialogFormVisible = false
      request.post("http://localhost:8082/user",this.form).then(res =>{
        if(res){
          this.$message.success("保存成功！")
          this.dialogFormVisible = false
          this.load()
        } else{
          this.$message.error("保存失败！")
        }
      })
    },
    handleSelectionChange(val){
      // console.log(val)
      this.multipleSelection=val
    },
    deleteRows(){
      //批量刪除
      let sids=this.multipleSelection.map(v=>v.sid)
      console.log(sids.toString())
      request.post("http://localhost:8082/user/delsubjects",sids.toString()).then(res=>{
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