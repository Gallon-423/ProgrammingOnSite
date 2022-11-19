<script setup lang="ts">

import Onehistory from '@/components/Onehistory.vue';
const props = defineProps<{records:}>
</script>

<template> 
<div class="div2">
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
</style>
