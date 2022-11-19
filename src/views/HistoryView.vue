<script setup lang="ts">

import Onehistory from '@/components/Onehistory.vue';
//const props = defineProps<{records:string}>
</script>

<template> 
<div class="div2">
<div class ="div1"> 
    <el-button type="info" default style="margin-right: 0;" class="button1">输入</el-button>
    <el-icon class="icon"><Minus /></el-icon>
        <el-icon class="icon"><Minus /></el-icon>
        <el-icon class="icon"><Minus /></el-icon>
        <el-icon class="icon" ><ArrowRightBold /></el-icon>
    <el-button type="success" default style="margin-left: 0;" class="button1">输出</el-button>
</div>
    <Onehistory origin="111111111" newone="一千一百一万一十一" />
    <Onehistory origin="1" newone="一千一百一万一十一" />
    <Onehistory origin="111111111" newone="一千一十一" />
 <!--
    <Onehistory v-for="item in history"
          :origin="item['title']"
          :newone="item['description']"
           />
 --> 
</div>
</template>
<style>
.div2{
    display: flex;
    align-items: center;
    justify-items: center;
    background-color: aliceblue;
    flex-direction: column;
}
.div1{
background-color: aliceblue;
border: 1px #000;
border-radius: 20px;
display: flex;
margin: 5px;
}

.icon{
display: flex;
align-items: center;
margin: auto auto;
}
.button1{
    width: 30vw;
    height: 10vh;
    font-size: larger;
    font-weight: bolder;
}
</style>
