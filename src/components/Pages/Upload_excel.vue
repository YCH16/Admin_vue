<template>
  <el-card class="box-card1" style="width: auto;margin-bottom: 20px">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/Welcome' }">主页</el-breadcrumb-item>
      <el-breadcrumb-item>学生信息管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Page3_1' }">学生信息</el-breadcrumb-item>
      <el-breadcrumb-item>批量增加学生信息</el-breadcrumb-item>
    </el-breadcrumb>
  </el-card>
  <el-card class="box-card2" style="width: auto">

    <el-upload
        ref="uploadRef"
        class="upload-demo"
        action
        :auto-upload="false"
        :on-change="handleChange"
        :http-request="uploadFile"
        :on-remove="remove"
        :on-exceed="exceed"
        accept=".xlsx, .xls"
        :limit="1"
    >
      <template #trigger>
        <el-button type="primary">上传excel文件</el-button>
      </template>

      <el-button class="ml-3" type="success" @click="submitUpload" style="margin-left: 15px">提交学生信息</el-button>

      <template #tip>
        <div class="el-upload__tip">
        </div>
      </template>
    </el-upload>

    <el-table :data="tableData" style="width: 100%;margin-top: 20px">
      <el-table-column fixed prop="username" label="学号" width="150" sortable/>
      <el-table-column prop="truename" label="姓名" width="120" />
      <el-table-column prop="gender" label="性别" width="120" />
      <el-table-column prop="tele" label="电话" width="120" />
      <el-table-column prop="coll" label="专业" width="120" />
      <el-table-column prop="classname" label="班级" width="120" />
      <el-table-column prop="password" label="密码" width="120" />
    </el-table>
  </el-card>
</template>

<script>
import XLSX from 'xlsx'
export default {
  name: "Upload_excel",
  data(){
    return{
      tableData:[],
    }
  },
  methods:{
    //導入表格
    async handleChange(ev){
      console.log(ev);
      let _this=this;
      _this.file2Xce(ev).then(item=>{
        if(item && item.length>0){
          if(item[0] && item[0].sheet && item[0].sheet.length){
            _this.tableData=item[0].sheet
          }
        }
      })
          .catch(error=>{
            loading().close();
          })
    },
    //
    file2Xce(file){
      return new Promise(function (resolve, reject){
        const reader =new FileReader();
        reader.onload=function(e){
          const data=e.target.result;
          this.wb=XLSX.read(data,{type:"binary"});
          const result=[];
          this.wb.SheetNames.forEach(sheetName=>{
            result.push({
              sheetName:sheetName,
              sheet:XLSX.utils.sheet_to_json(this.wb.Sheets[sheetName])
            })
          });
          console.log("解析");
          resolve(result);
        };
        reader.readAsBinaryString(file.raw);
      })
    },
    //上传1个以上文件时弹窗提示错误
    exceed: function() {
      this.$message.error("最多只能上传1个xls文件");
    },
    //删除文件
    remove() {
      this.tableData = [];
    },
    submitUpload(){
      this.tableData.forEach(Stu=>{console.log(Stu);

        this.axios.post("http://localhost:8082/student/save",Stu).then(res=>{
          console.log(res);
          if(res.status===200)this.$message({type:"success", message:"添加成功"});
          this.$router.push('../Page3_1');
        })
      })
    }
  }
}

</script>

<style scoped>

</style>