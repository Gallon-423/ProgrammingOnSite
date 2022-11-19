<template>
  <div style="display: flex;flex-direction: column;align-items: center;width:100%;">
    <div style="display: flex;flex-direction: column;align-items: center;">
        <div style="display: flex;">
    <el-row style="width:100%;">

      <el-form ref="digitsFormRef" status-icon inline>
        <div style="display: flex;">
        <el-form-item  label="请输入:" prop="input" size="large" style="width: 50vw;">
          <el-input v-model="input" clearable />
        </el-form-item>
        
          <el-button type="primary" size="large" @click="submitForm()"
            >提交</el-button
          >
    
        </div>
       
      </el-form>

    </el-row>
    
  </div>
  <el-row>
    转换结果：{{ output }}
  </el-row>
    </div>

  </div>  
  
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { ElMessage, type FormInstance, type FormRules } from "element-plus";
import { intoStorage, type BaseRecord } from "../../api";
import { postInput } from "../../api";
import { useHistory } from "@/stores/counter";
const input = ref("");
const output = ref("");
const historyStore = useHistory();

const submitForm = async () => {
  if (input.value.length === 0) {
    ElMessage({
      message: "转换对象不能为空",
      type: "info",
    });
  } else {
      postInput(input.value).then((res) => {
          output.value = res;
          intoStorage(input.value, output.value);
          historyStore.insertHistory(input.value, output.value);
})
}
};
</script>

<style scoped>
*{
    display: flex;
    
}
</style>
