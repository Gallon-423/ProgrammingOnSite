<template>
    <div>
        <el-row>
            <el-form ref="digitsFormRef" :model="record" status-icon :rules="rules" label-width="120px" inline
                class="digitsForm">
                <el-form-item label="请输入:" prop="digits" size="large">
                    <el-input v-model="record.input" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size="large" @click="submitForm(formRef)">提交</el-button>
                </el-form-item>
            </el-form>
        </el-row>
        <el-row>
            <el-input v-model="record.output" :rows="2" type="textarea" placeholder="答案会在这里显示..."   resize="none" readonly />
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import {intoStorage, type BaseRecord } from '../../api'
import {postInput } from '../../api'
const formRef = ref<FormInstance>()
const record=reactive<BaseRecord>({input:"",output:""})

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            postInput(record.input).then(res=>record.output=res)
            intoStorage(record)
        } else {
            //   todo 
            return false
        }
    })
}

// const daxie = "壹贰叁肆伍陆柒捌玖拾佰仟万亿元零整正"
// const daxie_u = "\u58f9\u8d30\u53c1\u8086\u4f0d\u9646\u67d2\u634c\u7396\u62fe\u4f70\u4edf\u4e07\u4ebf\u5143\u96f6\u6574\u6b63"

const rules = reactive({
    digits: [ { type: 'string',message:"", pattern: "/^(+?[1-9][0-9]*)|([\u58f9\u8d30\u53c1\u8086\u4f0d\u9646\u67d2\u634c\u7396\u62fe\u4f70\u4edf\u4e07\u4ebf\u5143\u96f6\u6574\u6b63]{0,})$/"}]
    // digits: [ { type: 'string', required: true, pattern: "/^+?[1-9][0-9]*$/"}]
})

</script>

<style scoped>

</style>