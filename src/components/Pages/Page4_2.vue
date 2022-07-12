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
  <el-select v-model="form.value" class="m-2" placeholder="Select">
    <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
    />
  </el-select>

  <h4>分数:</h4>
  <el-input-number v-model="form.num" :min="0" :max="100" @change="handleChange" />

  <h4>题目:</h4>
  <el-input
      v-model="form.question"
      maxlength="255"
      placeholder="Please input"
      show-word-limit
      type="textarea"
  />
  <h4>A选项:</h4>
  <el-input
      v-model="form.A"
      maxlength="255"
      placeholder="Please input"
      show-word-limit
      type="textarea"
  />
  <h4>B选项:</h4>
  <el-input
      v-model="form.B"
      maxlength="255"
      placeholder="Please input"
      show-word-limit
      type="textarea"
  />
  <h4>C选项:</h4>
  <el-input
      v-model="form.C"
      maxlength="255"
      placeholder="Please input"
      show-word-limit
      type="textarea"
  />
  <h4>D选项:</h4>
  <el-input
      v-model="form.D"
      maxlength="255"
      placeholder="Please input"
      show-word-limit
      type="textarea"
  />
  <h4>正确答案:</h4>
  <el-checkbox-group v-model="form.checkList" >
    <el-checkbox label="A">A选项</el-checkbox>
    <el-checkbox label="B">B选项</el-checkbox>
    <el-checkbox label="C">C选项</el-checkbox>
    <el-checkbox label="D">D选项</el-checkbox>
  </el-checkbox-group>
  <div style="display: flex;padding-left: 80%">
    <el-button type="info" @click="Browser">预览</el-button>
    <el-button type="primary" class="update_button" @click="reset">重置</el-button>
    <el-button type="success" class="save_button" @click="save">提交</el-button>
  </div>
</el-form>
  </el-card>

  <el-dialog v-model="dialogFormVisible" title="预览">

    <p>{{message_question}}</p>
    <p>{{message_A}}</p>
    <p>{{message_B}}</p>
    <p>{{message_C}}</p>
    <p>{{message_D}}</p>
    <p>{{message_Answer}}</p>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">关闭</el-button>
      </span>
    </template>
  </el-dialog>




</template>

<script>
export default {
  name: "Page4_2",
  data(){
    return{
      dialogFormVisible:false,
      form:{
        question:'',
        A:'',
        B:'',
        C:'',
        D:'',
        checkList:[],
      },
      message_question:'',
      message_A:'',
      message_B:'',
      message_C:'',
      message_D:'',
      message_Answer:'',
    }
  },
  methods:{
    Browser(){
      this.dialogFormVisible=true;
      this.message_question=this.form.question;
      this.message_A='A: '+this.form.A;
      this.message_B='B: '+this.form.B;
      this.message_C='C: '+this.form.C;
      this.message_D='D: '+this.form.D;
      this.message_Answer='正确答案: '+this.form.checkList;
    },
    reset(){
      this.form={}
    },
  }
}
</script>

<style scoped>

</style>