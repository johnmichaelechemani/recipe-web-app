<template>
  <div class="fixed inset-x-0 z-50 top-0 backdrop-blur-2xl" v-motion-fade>
    <Header />
  </div>
  <div class="flex justify-start items-center" v-motion-fade>
    <div class="m-2">
      <router-view />
    </div>
  </div>
</template>
<script setup>
import Header from "../components/header.vue";
</script>
