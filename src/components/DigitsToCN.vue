<template>
    <div>
        <el-row>
            <el-form ref="digitsFormRef" :model="digitsForm" status-icon :rules="rules" label-width="120px" inline
                class="digitsForm">
                <el-form-item label="请输入:" prop="digits" size="large">
                    <el-input v-model.number="digitsForm.digits" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size="large" @click="submitForm(formRef)">提交</el-button>
                </el-form-item>
            </el-form>
        </el-row>
        <el-row>
            <el-input v-model="ans" :rows="2" type="textarea" placeholder="答案会在这里显示..."   resize="none" readonly />
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const formRef = ref<FormInstance>()

const digitsForm = reactive({
    digits: '',
})
const ans = ref('')

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            
        } else {
            //   todo 
            return false
        }
    })
}

const rules = reactive({
    digits: [ { type: 'string', required: true, pattern: /^(+?[1-9][0-9]*)|([\u4e00-\u9fa5]{0,})$/ }]
})

</script>

<style scoped>

</style>