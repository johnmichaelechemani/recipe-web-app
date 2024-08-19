<template>
  <div class="my-3 flex justify-start gap-2 items-center">
    <input
      type="text"
      placeholder="Search"
      v-model="search"
      class="input input-bordered input-sm w-full rounded-full"
    />
    <div
      @click="handleSearch()"
      class="p-1 cursor-pointer rounded-full hover:bg-primary/10 text-orange-500 transition"
    >
      <Icon icon="lets-icons:search-light" class="text-2xl" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const search = ref("");
const handleSearch = () => {
  console.log(search.value);
};
</script>
