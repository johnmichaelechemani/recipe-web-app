<template>
  <div class="p-2 flex justify-center items-center" v-motion-fade>
    <div class="max-w-6xl min-w-2xl">
      <Header />
      

      <router-view />
    </div>
  </div>
</template>
<script setup>
import Header from "../components/header.vue";
</script>
