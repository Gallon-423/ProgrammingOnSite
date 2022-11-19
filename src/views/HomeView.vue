<script setup lang="ts">
import { postInput } from "@/../api"
import { ref } from "vue";
const output = ref<string>() 
const input = ref<string>()
postInput(input.value).then((result) => {
  output.value=result
});
</script>

<template>
  <div class="f-col">
    <div class="frame" style="width: 80vw;height:20vh"></div>
    <div class="frame" style="width: 20vw;height:60vh;align-self: center;"></div>
  </div>
</template>
<style scoped>
.f-col{
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

.frame{
  width: 100%;
  border:2px solid red
}
</style>