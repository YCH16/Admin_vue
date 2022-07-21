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
    <el-form :model="searchform">
      <el-row :gutter="20">
        <el-col :span="6" >
         <el-form-item label="学号:" >
            <el-input v-model="searchform.username" placeholder="输入要查询的学号" style="width: 330px;height:30px"/>
         </el-form-item>
        </el-col>
      <el-col :span="5" >
        <el-form-item label="姓名:">
          <el-input v-model="searchform.truename" style="width: 330px;height:30px" placeholder="输入查询姓名" ></el-input>
        </el-form-item>
      </el-col>
        <el-col :span="5" >
        <el-form-item label="专业:">
          <el-select  v-model="searchform.coll" style="width: 330px;height:30px" placeholder="选择专业" >
          <el-option
              v-for="item in allColl"
              :key="item.coll"
              :label="item.coll"
              :value="item.coll"
          />
            <!--v-for 定义item，在allColl中获取專業的id与coll
            :key="item.coll"   使用变量key遍历
            :label="item.coll" 在前端option框中展示的信息
            :value="item.coll" 向后台传的数据-->
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="5" >
        <el-form-item label="班级:">
          <el-input v-model="searchform.classname" style="width: 330px;height:30px" placeholder="输入查询班级" ></el-input>
        </el-form-item>
      </el-col>

      <el-col :span="3">
        <el-button type="primary" @click="load">查询<el-icon style="margin:3px"><Search /></el-icon></el-button>
      </el-col>
    </el-row>

    </el-form>

    <div style="display: flex">
      <el-button  style="width: 100%" @click="deleteRows" >删除选中</el-button>
      <el-button  style="width: 100%" @click="handleAdd">批量增加</el-button>
    </div>



  <el-table :data="tableData"
            style="width: 100%" max-height="250"
            :default-sort="{ prop: 'Sno', order: 'descending' }"
            stripe
            @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="55"  />
    <el-table-column fixed prop="username" label="学号" width="150" sortable/>
    <el-table-column prop="truename" label="姓名" width="120" />
    <el-table-column prop="gender" label="性别" width="120" />
    <el-table-column prop="tele" label="电话" width="120" />
    <el-table-column prop="coll" label="专业" width="120" />
    <el-table-column prop="classname" label="班级" width="120" />
    <el-table-column prop="password" label="密码" width="120" />
    <el-table-column fixed="right" label="操作" width="150">
      <template #default="scope" style="display: flex">
        <el-popconfirm title="确认删除吗?" @confirm="deleteRow(scope.row.username)">
          <template #reference>
            <el-button type="danger" size="small">刪除</el-button>
          </template>
        </el-popconfirm>
        <el-button type="primary" size="small" @click="modify(scope.row)">修改</el-button>
      </template>
    </el-table-column>
  </el-table>
    <el-button style="width: 100%" @click="onAddItem">添加学生信息</el-button>
  </el-card>
  <div class="demo-pagination-block" style=" margin-top: 20px ">
    <el-pagination
        v-model:currentPage="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[5, 10, 15, 20, 25]"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </div>

  <el-dialog v-model="dialogFormVisible" title="添加学生信息">
    <el-form :model="form" :rules="FromRules" ref="FromRef">
      <el-form-item label="学号:" :label-width="formLabelWidth" prop="username">
        <el-input v-model="form.username" autocomplete="off" clearable/>
      </el-form-item>
      <el-form-item label="姓名:" :label-width="formLabelWidth" prop="truename">
        <el-input v-model="form.truename" autocomplete="off" clearable/>
      </el-form-item>
      <el-form-item label="性别:" :label-width="formLabelWidth" prop="gender">
        <el-radio-group v-model="form.gender" class="ml-4">
          <el-radio label="男" size="large">男</el-radio>
          <el-radio label="女" size="large">女</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="电话:" :label-width="formLabelWidth" prop="tele">
        <el-input v-model="form.tele" autocomplete="off" clearable/>
      </el-form-item>


      <el-form-item label="专业" :label-width="formLabelWidth" prop="coll">
        <el-select v-model="form.coll" placeholder="Please select" clearable>
          <el-option
              v-for="item in allColl"
              :key="item.coll"
              :label="item.coll"
              :value="item.coll"
          />
        </el-select>
      </el-form-item>

        <el-form-item label="班级" :label-width="formLabelWidth" prop="classname">
        <el-input v-model="form.classname"  clearable>
        </el-input>
      </el-form-item>

      <el-form-item label="密码:" :label-width="formLabelWidth" prop="password">
        <el-input v-model="form.password" autocomplete="off" clearable/>
      </el-form-item>

    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="save">添加</el-button>
      </span>
    </template>
  </el-dialog>

  <el-dialog v-model="dialogFormVisible_modify" title="修改学生信息">
    <el-form :model="form_modify" :rules="form_modify_rules">
      <el-form-item label="学号:" :label-width="formLabelWidth" prop="username">
        <el-input v-model="form_modify.username" autocomplete="off" disabled/>
      </el-form-item>
      <el-form-item label="姓名:" :label-width="formLabelWidth" prop="truename">
        <el-input v-model="form_modify.truename" autocomplete="off" />
      </el-form-item>
      <el-form-item label="性别:" :label-width="formLabelWidth" prop="gender">
        <el-radio-group v-model="form_modify.gender" class="ml-4">
          <el-radio label="男" size="large">男</el-radio>
          <el-radio label="女" size="large">女</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="电话:" :label-width="formLabelWidth">
        <el-input v-model="form_modify.tele" autocomplete="off"/>
      </el-form-item>


      <el-form-item label="专业" :label-width="formLabelWidth">
        <el-select v-model="form_modify.coll" placeholder="Please select">
          <el-option
              v-for="item in allColl"
              :key="item.coll"
              :label="item.coll"
              :value="item.coll"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="班级" :label-width="formLabelWidth">
        <el-input v-model="form_modify.classname" >
        </el-input>
      </el-form-item>

      <el-form-item label="密码:" :label-width="formLabelWidth">
        <el-input v-model="form_modify.password" autocomplete="off" />
      </el-form-item>

    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible_modify = false">取消</el-button>
        <el-button type="primary" @click="update">修改</el-button>
      </span>
    </template>
  </el-dialog>



</template>

<script>
export default {
  name: "Page3_1",
  data(){
    return{
      dialogFormVisible:false,
      dialogFormVisible_modify:false,
      currentPage:1,
      pageSize:10,
      total:0,
      form:{
        username:'',
        truename:'',
        gender:'',
        tele:'',
        coll:'',
        classname:'',
        password:''
      },
      form_modify:{},
      FromRules:{
        username: [{required: true, message: '不能为空', trigger: 'blur'}],
        truename: [{required: true, message: '用戶名不能为空', trigger: 'blur'}],
        tele: [{required: true, message: '不能为空', trigger: 'blur'}],
        coll: [{required: true, message: '不能为空', trigger: 'blur'}],
        gender: [{required: true, message: '必选', trigger: 'blur'}],
        classname: [{required: true, message: '不能为空', trigger: 'blur'}],
      },
      form_modify_rules:{
        truename: [{required: true, message: '用戶名不能为空', trigger: 'blur'}],
      },
      searchform:{
        username:'',
        truename:'',
        coll:'',
        classname:''
      },
      tableData:[],
      multipleselection:[],
      allColl:[{
        coll:'',
      }],
      allClass:[{
        classname:'',
      }]
    }
  },
  created(){
    this.load();
    this.loadAllcoll();
  },
  methods:{
    onAddItem(){//添加學生信息
      this.dialogFormVisible=true
      this.form={}
    },
    handleAdd(){//跳到批量添加學生信息
      this.$router.push("/Page3_1/upload");
    },
    modify(row){
      this.dialogFormVisible_modify=true;
      this.form_modify.username=row.username;
      this.form_modify.truename=row.truename;
      this.form_modify.gender=row.gender;
      this.form_modify.tele=row.tele;
      this.form_modify.coll=row.coll;
      this.form_modify.classname=row.classname;
      this.form_modify.password=row.password;
    },
    save(){//向後端提交添加的學生信息數據
      this.$refs.FromRef.validate((valid)=>{
        console.log(valid)
        if(!valid){this.dialogFormVisible = true;}
        else{
          console.log(this.form);
          this.axios.post("http://localhost:8082/student/save",this.form).then(res=>{
            this.dialogFormVisible = false;
            console.log(res);//打印返回結果
            this.load();
          });
        }
      })
    },
    deleteRow(username){//刪除一個
        console.log(username);
        this.axios.delete('http://localhost:8082/student/'+username).then(res=>{
        console.log(res);//打印返回結果
        if(res.code==='0') this.$message({type:"error", message:"刪除失敗"})
        else {this.$message({type:"success", message:"刪除成功"});this.load();}
      })
    },
    update(){
      this.dialogFormVisible_modify = false
      console.log(this.form_modify);
      this.axios.post("http://localhost:8082/student/update",this.form_modify).then(res=>{
        console.log(res);//打印返回結果
        this.load();
      });
    },
    handleSelectionChange(val){
      console.log(val);
      this.multipleselection=val;
    },
    deleteRows(){//批量刪除
      console.log(this.multipleselection)
      this.multipleselection.forEach(id=>{console.log(id.username);
        this.axios.delete('http://localhost:8082/student/'+id.username).then(res=>{
          if(res.code==='0') {this.$message({type:"error", message:"刪除失敗"});}
          else {this.$message({type:"success", message:"刪除成功"});this.load();}
        })
      })
    },
    load(){
      this.axios.get('http://localhost:8082/student/page',{
        params:{
          pageNum:this.currentPage,
          pageSize:this.pageSize,
          username:this.searchform.username,
          truename:this.searchform.truename,
          coll:this.searchform.coll,
          //coll:'计算机科学与技术',
          classname:this.searchform.classname
        }
      }).then((res)=>{
        console.log(this.searchform.coll);
        console.log(res);
        this.tableData=res.data.records;
        this.total=res.data.total;
      })
    },
    loadAllcoll(){
      this.axios.get('http://localhost:8082/major')
          .then((res)=>{
            console.log(res);
            for(let i=0;i<res.data.length;i++){
              this.allColl.push({coll:res.data[i].mname});
            }
          })
    },
    handleSizeChange(){
      this.load()
    },
    handleCurrentChange(){
      this.load()
    }
  },
}
</script>

<style scoped>

</style>