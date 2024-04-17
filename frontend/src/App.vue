<script setup>
import { RouterView } from 'vue-router';
import MainHeader from './components/MainHeader.vue'

</script>

<template>
  <div id="app" class="w-screen h-screen flex flex-col items-center bg-lblue-tardis justify-center">
    <MainHeader />
    <router-view />
  </div>
</template>

<style scoped>

</style>
