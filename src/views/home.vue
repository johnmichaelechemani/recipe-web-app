<template>
  <div class="p-2 flex justify-center items-center" v-motion-fade>
    <div class="max-w-6xl min-w-2xl">
      <Header />

      <div class="flex justify-end gap-2 items-center my-2">
        <input
          type="search"
          v-model="search"
          placeholder="Search..."
          class="input rounded-full input-bordered sm:w-52 md:w-96 w-full"
        />
      </div>
      <div class="flex justify-start items-center gap-2 mt-5">
        <AddRecipe />
        <Chats />
      </div>
      <YourRecipe />
      <AllRecipe :searchQuery="search" />
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { Icon } from "@iconify/vue";
import Header from "../components/header.vue";
import AddRecipe from "../components/addRecipe.vue";
import AllRecipe from "../components/allRecipe.vue";
import YourRecipe from "../components/yourRecipe.vue";
import Chats from "../components/chats.vue";

export default {
  components: {
    Header,
    Icon,
    AddRecipe,
    AllRecipe,
    YourRecipe,
    Chats,
  },
  setup() {
    const search = ref("");

    return { search };
  },
};
</script>
