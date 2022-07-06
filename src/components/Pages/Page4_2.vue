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
      maxlength="255"
      placeholder="Please input"
      show-word-limit
      type="textarea"
  />
  <h4>A选项:</h4>
  <el-input
      v-model="textarea"
      maxlength="255"
      placeholder="Please input"
      show-word-limit
      type="textarea"
  />
  <h4>B选项:</h4>
  <el-input
      v-model="textarea"
      maxlength="255"
      placeholder="Please input"
      show-word-limit
      type="textarea"
  />
  <h4>C选项:</h4>
  <el-input
      v-model="textarea"
      maxlength="255"
      placeholder="Please input"
      show-word-limit
      type="textarea"
  />
  <h4>D选项:</h4>
  <el-input
      v-model="textarea"
      maxlength="255"
      placeholder="Please input"
      show-word-limit
      type="textarea"
  />
  <h4>正确答案:</h4>
  <el-checkbox-group v-model="checkList">
    <el-checkbox :label="1">A选项</el-checkbox>
    <el-checkbox :label="2">B选项</el-checkbox>
    <el-checkbox :label="3">C选项</el-checkbox>
    <el-checkbox :label="4">D选项</el-checkbox>
  </el-checkbox-group>
  <div style="display: flex;padding-left: 80%">
    <el-button type="info" @click="Browser">预览</el-button>
    <el-button type="primary" class="update_button" @click="update">重置</el-button>
    <el-button type="success" class="save_button" @click="save">提交</el-button>
  </div>
  </el-card>
</template>

<script>
export default {
  name: "Page4_2"
}
</script>

<style scoped>

</style>