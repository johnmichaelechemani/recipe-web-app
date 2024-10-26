<template>
  <div class="fixed inset-x-0 z-50 top-0 backdrop-blur-2xl" v-motion-fade>
    <Header />
  </div>

  <router-view />
</template>
<script setup>
import Header from "../components/header.vue";
</script>
