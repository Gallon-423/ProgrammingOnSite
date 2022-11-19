<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <RouterView />
  <RouterLink to="/history">history</RouterLink>
</template>

<style scoped>

</style>
