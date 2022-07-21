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
      <el-form :model="search">
      <el-row :gutter="20">
        <el-col :span="7" >
          <el-form-item label="专业:" >
            <el-input v-model="search.mname" placeholder="Please input" style="width: 330px;height:30px"/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="load">查询 <el-icon style="margin:5px"><Search /></el-icon></el-button>
        </el-col>
      </el-row>
      </el-form>

      <el-table
          ref="multipleTableRef"
          :data="tableData"
          style="width:auto"
          @selection-change="handleSelectionChange"
          row-key="mno"
      >
        <el-table-column type="selection" width="120" :reserve-selection="true" />
        <el-table-column prop="mno" label="专业编号" width="300"/>
        <el-table-column prop="mname" label="专业名" width="300"/>
      </el-table>

      <div style="display: flex">
        <el-button  style="width: 100%"  @click="onAddItem">添加专业方向</el-button>
        <el-button  style="width: 100%"  @click="deleteRows" >删除选中</el-button>
      </div>

    </el-card>
    <div class="demo-pagination-block" style=" margin-top: 20px ">
      <el-pagination
          v-model:currentPage="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[5, 10, 15]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="Total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </div>

  <el-dialog v-model="dialogFormVisible" title="添加专业方向">
    <el-form :model="form">
      <el-form-item label="专业:" :label-width="formLabelWidth">
        <el-input v-model="form.mname" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="save">添加</el-button>
      </span>
    </template>
  </el-dialog>

</template>
<script>
export default {
  name: "Page5_1",
  data(){
    return{
      dialogFormVisible:false,
      currentPage:1,
      pageSize:10,
      Total:0,
      form:{},
      sels: [],//选中的值显示
      search:{
        mname:'',
      },
      tableData:[],
      multipleselection:[]//紀錄勾選的數據的數組
    }
  },
  created(){
    this.load();
  },
  methods:{
    onAddItem(){
      this.dialogFormVisible=true
      this.form={}
    },
    save(){
      this.dialogFormVisible=false
      this.axios.post('http://localhost:8082/major',this.form).then(res=>{
        console.log(res);this.load();
      })
    },
    load(){
      this.axios.get('http://localhost:8082/major/page',{
        params:{
          pageNum:this.currentPage,
          pageSize:this.pageSize,
          mname:this.search.mname
        }
      }).then((res)=>{
        this.tableData=res.data.records;
        this.Total=res.data.total;
      })
    },
    handleSelectionChange(val){
      console.log(val);
      this.multipleselection=val;
    },
    deleteRows(){
      console.log(this.multipleselection)
      this.multipleselection.forEach(id=>{console.log(id.mno);
        this.axios.delete('http://localhost:8082/major/'+id.mno).then(res=>{
          if(res.code==='0') {this.$message({type:"error", message:"刪除失敗"});}
          else {this.$message({type:"success", message:"刪除成功"});this.load();}
        })
      })
    },
    handleSizeChange(){
      this.load();
    },
    handleCurrentChange(){
      this.load();
    },
  }
}
</script>

<style scoped>

</style>