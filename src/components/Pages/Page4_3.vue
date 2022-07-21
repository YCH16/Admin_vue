<template>

  <el-card class="box-card1" style="width: auto;margin-bottom: 20px">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/welcome' }">主页</el-breadcrumb-item>
      <el-breadcrumb-item>题库管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加是非题</el-breadcrumb-item>
    </el-breadcrumb>
  </el-card>

  <el-card class="box-card2" style="width: auto;margin-bottom: 20px">

    <h2 align="center">添加是非题</h2>
    <el-form :model="form">
      <h4>专业方向:</h4>
      <el-select v-model="form.major" class="m-2" placeholder="Select">
        <el-option
            v-for="item in allmajors"
            :key="item.major"
            :label="item.major"
            :value="item.major"
        />
      </el-select>

      <h4>分数:</h4>
      <el-input-number v-model="form.score" :min="0" :max="100" @change="handleChange" />

      <h4>题目:</h4>
      <el-input
          v-model="form.content"
          maxlength="200"
          placeholder="Please input"
          show-word-limit
          type="textarea"
          :rows="3"
      />


      <h4>正确答案:</h4>
      <el-radio-group v-model="form.radio">
        <el-radio label="A">对</el-radio>
        <el-radio label="B">错</el-radio>
      </el-radio-group>


      <div style="display: flex;padding-left: 80%;">
        <el-button type="info" @click="Browser">预览</el-button>
        <el-button type="primary" class="update_button" @click="reset">重置</el-button>
        <el-button type="success" class="save_button" @click="save">提交</el-button>
      </div>
    </el-form>
  </el-card>

  <el-dialog v-model="dialogFormVisible" title="预览">
    <p>{{message_major}}</p>
    <p>{{message_score}}</p>
    <p>{{message_question}}</p>
    <p>{{message_Answer}}</p>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">关闭</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import request from "../../../utils/request";

export default {
  name: "是非题",
  data(){
    return{
      dialogFormVisible:false,
      form:{
        mno:'',
        major:'',
        score:'',
        type:'3',
        content:'',
        radio:'',
        optiona:'对',
        optionb:'错'
      },
      message_question:'',
      message_Answer:'',
      message_major:'',
      message_score:'',
      options: [{
        value: '选项1',
        label: '软件工程'
      }, {
        value: '选项2',
        label: '数字媒体'
      }, {
        value: '选项3',
        label: '网络空间安全'
      }, {
        value: '选项4',
        label: '人工智能'
      }, {
        value: '选项5',
        label: '通信工程'
      }, {
        value: '选项6',
        label: '计算机科学与技术'
      }],
      value: '',
      allmajors:[{
        major:'',
      }]
    }
  },
  created() {
    this.loadAllmajors();

  },
  methods:{
    Browser(){
      this.dialogFormVisible=true;
      this.message_major='专业: '+this.form.major;
      this.message_score='分数: '+this.form.score;
      this.message_question='题目: '+this.form.content;
      this.message_Answer='正确答案: '+this.form.radio;
    },
    reset(){
      this.form={}
    },
    save(){
      request.get("http://localhost:8082/user/single",{
        params:{
          major:this.form.major
        }
      }).then(mno =>{
        this.form.mno=mno
        if(this.form.mno){
          console.log(this.form);
          request.post("http://localhost:8082/user",this.form).then(res =>{
            if(res){console.log(this.form)
              this.$message.success("保存成功！")
            } else{
              this.$message.error("保存失败！")
            }
          })
        }
      })
    },
    loadAllmajors(){
      this.axios.get("http://localhost:8082/major").then(res=>{
        console.log(res)
        for(let i=0;i<res.data.length;i++){
          this.allmajors.push({major: res.data[i].mname})
        }
      })
    }
  }
}
</script>

<style scoped>

</style>