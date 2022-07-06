<template>

  <el-card class="box-card1" style="width: auto;margin-bottom: 20px">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/welcome' }">主页</el-breadcrumb-item>
      <el-breadcrumb-item>题库管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加简答题</el-breadcrumb-item>
    </el-breadcrumb>
  </el-card>

  <el-card class="box-card1" style="width: auto;margin-bottom: 20px">
  <h2 align="center">添加简答题</h2>

  <h4>科目:</h4>
  <el-select v-model="value" class="m-2" placeholder="Select">
    <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
    />
  </el-select>

  <h4>分数:</h4>
  <el-input-number v-model="num" :min="0" :max="100" @change="handleChange" />


  <h4>题目:</h4>
  <el-input
      v-model="textarea"
      :rows="5"
      maxlength="255"
      placeholder="Please input"
      show-word-limit
      type="textarea"
  />

  <h4>参考答案:</h4>
  <el-input
      v-model="textarea"
      maxlength="255"
      :rows="5"
      placeholder="Please input"
      show-word-limit
      type="textarea"
  />

  <div style="margin: 20px 0" />
  <div style="display: flex;padding-left: 80%">
    <el-button type="info" @click="Browser">预览</el-button>
    <el-button type="primary" class="update_button" @click="update">重置</el-button>
    <el-button type="success" class="save_button" @click="save">提交</el-button>
  </div>
  </el-card>
</template>

<script>
export default {
  name: "Page4_4",
  options:[
      {
        value:'option1',
        label: 'Option1',
      },
  ],
  methods:{
    handleChange(){

    }
  }
}
</script>

<style scoped>

</style>