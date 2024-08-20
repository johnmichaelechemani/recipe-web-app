<template>
  <div class="my-3 flex justify-start gap-2 items-center">
    <input
      type="text"
      placeholder="Search"
      v-model="search"
      class="input input-bordered input-sm w-full rounded-full"
    />
    <button
      @click="handleSearch()"
      class="p-1 rounded-full transition"
      :disabled="search === ''"
      :class="
        search === ''
          ? 'text-gray-500 cursor-not-allowed'
          : 'text-orange-500 shadow hover:bg-primary/20 bg-primary/10'
      "
    >
      <Icon icon="lets-icons:search-light" class="text-2xl" />
    </button>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { ChatFuntions } from "../scripts/ChatFunctions.js";

const { search, handleSearch } = ChatFuntions();
</script>
