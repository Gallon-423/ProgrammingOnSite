<script setup lang="ts">
export interface Props {
  origin: string;
  newone: string;
  }
  const props = withDefaults(defineProps<Props>(), {
  
})
</script>
<template>
    <div class="div1">
   
        <el-button type="info" plain style="margin-right: 0;" class="button1">{{origin}}</el-button>
        <el-icon class="icon"><Minus /></el-icon>
        <el-icon class="icon"><Minus /></el-icon>
        <el-icon class="icon"><Minus /></el-icon>
        <el-icon class="icon" ><ArrowRightBold /></el-icon>
        <el-button type="success" plain style="margin-left: 0;" class="button1">{{newone}}</el-button>
  </div>
</template>
<style >
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