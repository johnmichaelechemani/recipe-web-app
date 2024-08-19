<template>
  <div class="my-3 flex justify-start gap-2 items-center">
    <input
      type="text"
      placeholder="Search"
      class="input input-bordered input-sm w-full rounded-full"
    />
    <div
      class="p-1 cursor-pointer rounded-full hover:bg-primary/10 text-orange-500 transition"
    >
      <Icon icon="lets-icons:search-light" class="text-2xl" />
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
</script>
