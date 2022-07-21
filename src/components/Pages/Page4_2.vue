<template>

  <el-card class="box-card1" style="width: auto;margin-bottom: 20px">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/welcome' }">主页</el-breadcrumb-item>
      <el-breadcrumb-item>题库管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加多选题</el-breadcrumb-item>
    </el-breadcrumb>
  </el-card>

  <el-card class="box-card2" style="width: auto;margin-bottom: 20px">
    <h2 align="center">添加多选题</h2>
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
      <el-input-number v-model="form.score" :min="0" :max="100" />

      <h4>题目:</h4>
      <el-input
          v-model="form.content"
          maxlength="200"
          placeholder="Please input"
          show-word-limit
          type="textarea"
          :rows="3"
      />

      <h4>选项A:</h4>
      <el-input
          v-model="form.optiona"
          maxlength="50"
          placeholder="Please input"
          show-word-limit
          type="textarea"
          :rows="2"
      />

      <h4>选项B:</h4>
      <el-input
          v-model="form.optionb"
          maxlength="50"
          placeholder="Please input"
          show-word-limit
          type="textarea"
          :rows="2"
      />

      <h4>选项C:</h4>
      <el-input
          v-model="form.optionc"
          maxlength="50"
          placeholder="Please input"
          show-word-limit
          type="textarea"
          :rows="2"
      />

      <h4>选项D:</h4>
      <el-input
          v-model="form.optiond"
          maxlength="50"
          placeholder="Please input"
          show-word-limit
          type="textarea"
          :rows="2"
      />

      <h4>选项E:</h4>
      <el-input
          v-model="form.optione"
          maxlength="50"
          placeholder="Please input"
          show-word-limit
          type="textarea"
          :rows="2"
      />
      <!--  <h4>A选项:</h4>-->
      <!--  <el-input-->
      <!--      v-model="form.A"-->
      <!--      maxlength="50"-->
      <!--      placeholder="Please input"-->
      <!--      show-word-limit-->
      <!--      type="textarea"-->
      <!--  />-->
      <!--  <h4>B选项:</h4>-->
      <!--  <el-input-->
      <!--      v-model="form.B"-->
      <!--      maxlength="50"-->
      <!--      placeholder="Please input"-->
      <!--      show-word-limit-->
      <!--      type="textarea"-->
      <!--  />-->
      <!--  <h4>C选项:</h4>-->
      <!--  <el-input-->
      <!--      v-model="form.C"-->
      <!--      maxlength="50"-->
      <!--      placeholder="Please input"-->
      <!--      show-word-limit-->
      <!--      type="textarea"-->
      <!--  />-->
      <!--  <h4>D选项:</h4>-->
      <!--  <el-input-->
      <!--      v-model="form.D"-->
      <!--      maxlength="50"-->
      <!--      placeholder="Please input"-->
      <!--      show-word-limit-->
      <!--      type="textarea"-->
      <!--  />-->
      <!--  <h4>E选项:</h4>-->
      <!--  <el-input-->
      <!--      v-model="form.E"-->
      <!--      maxlength="50"-->
      <!--      placeholder="Please input"-->
      <!--      show-word-limit-->
      <!--      type="textarea"-->
      <!--  />-->




      <h4>正确答案:</h4>
      <!--  <el-checkbox-group v-model="form.radio" >-->
      <el-checkbox-group
          v-model="form.radio">
        <el-checkbox v-for="item in items" :label="item" :key="item">{{item}}</el-checkbox>
      </el-checkbox-group>


      <!--  </el-checkbox-group>-->

      <!--    <el-checkbox label="A">A选项</el-checkbox>-->
      <!--    <el-checkbox label="B">B选项</el-checkbox>-->
      <!--    <el-checkbox label="C">C选项</el-checkbox>-->
      <!--    <el-checkbox label="D">D选项</el-checkbox>-->
      <!--    <el-checkbox label="D">E选项</el-checkbox>-->


      <div style="display: flex;padding-left: 80%">
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
    <p>{{message_A}}</p>
    <p>{{message_B}}</p>
    <p>{{message_C}}</p>
    <p>{{message_D}}</p>
    <p>{{message_E}}</p>
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
const Options = ['A', 'B', 'C', 'D','E'];

export default {
  name: "多选题",
  data(){
    return{
      dialogFormVisible:false,
      form:{
        mno:'',
        major:'',
        type:'2',
        content:'',
        score:'',
        optiona:'',
        optionb:'',
        optionc:'',
        optiond:'',
        optione:'',
        radio:[]
      },
      message_major:'',
      message_score:'',
      message_question:'',
      message_A:'',
      message_B:'',
      message_C:'',
      message_D:'',
      message_E:'',
      message_Answer:'',
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
      items: Options,
      allmajors:[{
        major:'',
      }]
    };
  },
  created() {
    this.loadAllmajors();

  },
  methods:{
    Browser(){
      this.dialogFormVisible=true;
      this.message_major='专业方向: '+this.form.major;
      this.message_score='分数: '+this.form.score;
      this.message_question='题目: '+this.form.content;
      this.message_A='A: '+this.form.optiona;
      this.message_B='B: '+this.form.optionb;
      this.message_C='C: '+this.form.optionc;
      this.message_D='D: '+this.form.optiond;
      this.message_E='E: '+this.form.optione;
      this.message_Answer='正确答案: '+this.form.radio;
    },
    reget(){
      request.get("http://localhost:8082/user/single",{
        params:{
          major:this.form.major
        }
      }).then(mno =>{
        console.log(mno)
        this.form.mno=mno

      })
    },
    reset(){
      this.form={}
    },
    save(){
      this.reget()
      this.form.radio=this.form.radio.toString()
      console.log(this.form)
      request.post("http://localhost:8082/user",this.form).then(res =>{
        console.log(res)
        if(res){
          this.$message.success("保存成功！")
        } else{
          this.$message.error("保存失败！")
        }
      })
    },
    loadAllmajors(){
      this.axios.get("http://localhost:8082/major").then(res=>{
        // console.log(res)
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


<!--还是radio类型的问题：改成字符串可以，数组不行-->