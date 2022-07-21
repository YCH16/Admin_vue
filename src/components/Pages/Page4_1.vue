<template>
  <el-card class="box-card1" style="width: auto;margin-bottom: 20px">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/welcome' }">主页</el-breadcrumb-item>
      <el-breadcrumb-item>题库管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加单选题</el-breadcrumb-item>
    </el-breadcrumb>
  </el-card>


  <el-card class="box-card2" style="width: auto;">
    <h2 align="center">添加单选题</h2>
    <el-form :model="form">
      <h4>专业方向:</h4>
      <el-select v-model="form.major" placeholder="请选择">
        <el-option
            v-for="item in allmajors"
            :key="item.major"
            :label="item.major"
            :value="item.major">
        </el-option>
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
      <h4>正确答案:</h4>
      <el-radio-group v-model="form.radio">
        <el-radio label="A">A选项</el-radio>
        <el-radio label="B">B选项</el-radio>
        <el-radio label="C">C选项</el-radio>
        <el-radio label="D">D选项</el-radio>
      </el-radio-group>
      <div style="display: flex;padding-left: 80%">
        <el-button type="info" @click="Browser">预览</el-button>
        <el-button type="primary" class="update_button" @click="reset">重置</el-button>
        <el-button type="success" class="save_button" @click="save">提交</el-button>
      </div>
    </el-form>
  </el-card>

  <el-dialog v-model="dialogFormVisible" title="预览">

    <p>{{message_major}}</p>
    <p>{{message_mno}}</p>
    <p>{{message_score}}</p>
    <p>{{message_question}}</p>
    <p>{{message_optiona}}</p>
    <p>{{message_optionb}}</p>
    <p>{{message_optionc}}</p>
    <p>{{message_optiond}}</p>
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
  name: "单选题",
  data(){
    return{

      form:{
        mno:'',
        major:'',
        type:'1',
        content:'',
        score:'',
        radio:'',
        optiona:'',
        optionb:'',
        optionc:'',
        optiond:''
      },
      dialogFormVisible:false,
      message_major:'',
      message_score:'',
      message_mno:'',
      message_question:'',
      message_Answer:'',
      message_optiona:'',
      message_optionb:'',
      message_optionc:'',
      message_optiond:'',
      /*options: [{
        value: '1',
        label: '软件工程'
      }, {
        value: '2',
        label: '数字媒体'
      }, {
        value: '3',
        label: '网络空间安全'
      }, {
        value: '4',
        label: '人工智能'
      }, {
        value: '5',
        label: '通信工程'
      }, {
        value: '6',
        label: '计算机科学与技术'
      }],*/
      value: '',
      allmajors:[{
        major:'',
      }]
    }
  },
  created() {
    this.loadAllmajors();
  },
  methods: {
    reset(){
      console.log(this.form)
      this.form={}
    },
    // reget(){
    //   request.get("http://localhost:8082/user/single",{
    //     params:{
    //       major:this.form.major
    //     }
    //   }).then(mno =>{
    //     this.form.mno=mno
    //     if(this.form.mno){
    //       this.$message.success("获取专业编号成功！")
    //
    //     } else{
    //       this.$message.error("获取专业编号失败！")
    //     }
    //   })
    //   console.log("hey"+this.form.mno)
    //   //return this.form.mno;
    // },
    Browser(){
      this.dialogFormVisible=true;
      this.message_major='专业方向: '+this.form.major;
      this.message_mno='专业编号: '+this.form.mno;
      this.message_score='分数: '+this.form.score;
      this.message_question='题目: '+this.form.content;
      this.message_optiona='选项A: '+this.form.optiona;
      this.message_optionb='选项B: '+this.form.optionb;
      this.message_optionc='选项C: '+this.form.optionc;
      this.message_optiond='选项D: '+this.form.optiond;
      this.message_Answer='正确答案: '+this.form.radio;
    },
    save(){
      request.get("http://localhost:8082/user/single",{
        params:{
          major:this.form.major
        }
      }).then(mno =>{
        this.form.mno=mno
        if(this.form.mno){
          this.$message.success("获取专业编号成功！")
          console.log(this.form);
          request.post("http://localhost:8082/user",this.form).then(res =>{
            if(res){console.log(this.form)
              this.$message.success("保存成功！")
            } else{
              this.$message.error("保存失败！")
            }
          })
        } else{
          this.$message.error("获取专业编号失败！")
        }
      })
      // if(this.form.mno){
      //   this.$message.success("form.mno不为空！")
      // }else{
      //   this.$message.error("form.mno为空！")
      // }

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