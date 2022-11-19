<script setup lang="ts">
import { postInput } from "@/../api";
import DigitsToCNVue from "@/components/DigitsToCN.vue";
import { useHistory } from "@/stores/counter";
import { ref } from "vue";
const output = ref<string>();
const input = ref<string>();
postInput(input.value).then((result) => {
  output.value = result;
});
const historyStore = useHistory();
console.log(historyStore.history);

</script>

<template>
  <div class="f-col" style="margin-top:10%;width: 100%;">
    <p style="
    
    font-size: 2.4em;
    font-weight: bolder;
    margin-bottom: 5%;
    display: flex;
  ">数字转换器</p>
    <div class="frame" style="width: 80vw; height: 20vh;">
      <DigitsToCNVue></DigitsToCNVue>
    </div>
    <div
      style="
        font-size: 2em;
        font-weight: bolder;
        margin-bottom: 2%;
        display: flex;
        
      "
    >
      <p style="font-weight: bolder">历史记录</p>
      <img
        src="../assets/loading.svg"
        style="height: 32px; width: 32px; margin-left: 20px"
        alt=""
      />
    </div>
    <div style="display: flex;align-items: start;flex-direction: column;">
    <p v-for="item in historyStore.history" >
      - {{ item.input }} --> {{ item.output }}
    </p>
    </div>
    

    <div
      class="frame"
      style="width: 20vw; height: 60vh; align-self: center"
    ></div>
  </div>
</template>
<style scoped>
*{
  display: flex;
}
.f-col {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
