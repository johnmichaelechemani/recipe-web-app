<script setup>
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<template>
  <div class="flex justify-center items-center w-full" v-motion-fade>
    <div class="py-2 flex justify-start items-center gap-1 min-w-80">
      <div
        class="p-2 rounded-full hover:bg-gray-500/20 transition"
        @click="router.back()"
      >
        <Icon icon="line-md:arrow-left" width="20" height="20" />
      </div>
      <h1 class="text-xl font-semibold">Chats</h1>
    </div>
  </div>
</template>
