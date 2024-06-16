<template>
  <div class="p-2">
    <Header />
    <div class="flex justify-end gap-2 items-center my-2">
      <input
        type="search"
        v-model="search"
        placeholder="Search..."
        class="input input-bordered sm:w-52 md:w-96 w-full"
      />
      <button
        :disabled="search.length === 0"
        class="btn btn-primary"
        @click="filter"
      >
        <Icon icon="bi:search" class="text-xl" />
      </button>
    </div>
    <div class="flex justify-start items-center gap-2 mt-5">
      <AddRecipe />
      <Chats />
    </div>
    <YourRecipe />
    <AllRecipe :searchQuery="search" />
  </div>
</template>
<script>
import { ref } from "vue";
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
    const filter = () => {
      console.log(search.value);
    };
    return { search, filter };
  },
};
</script>
