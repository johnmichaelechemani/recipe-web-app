<template>
  <div class="my-11">
    <div class="flex justify-end gap-2 items-center my-2">
      <input
        type="search"
        v-model="search"
        placeholder="Search..."
        class="input rounded-full input-bordered sm:w-52 md:w-96 w-full"
      />
    </div>
    <div class="flex justify-start items-center gap-1 mt-5">
      <AddRecipe />

      <router-link
        to="messages"
        class="hover:text-primary transition p-2 flex justify-center items-center"
      >
        <div class="indicator">
          <span
            v-if="newMessageArray !== 0"
            class="indicator-item badge badge-primary text-xs font-semibold"
            >{{ newMessageArray }}</span
          >
          <Icon icon="uiw:message" width="25" height="25" />
        </div>
      </router-link>
    </div>
    <YourRecipe />
    <AllRecipe :searchQuery="search" />
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { Icon } from "@iconify/vue";
import AddRecipe from "../components/addRecipe.vue";
import AllRecipe from "../components/allRecipe.vue";
import YourRecipe from "../components/yourRecipe.vue";
import { ChatFuntions } from "../scripts/ChatFunctions.js";

export default {
  components: {
    Icon,
    AddRecipe,
    AllRecipe,
    YourRecipe,
  },
  setup() {
    const { newMessageArray } = ChatFuntions();
    const search = ref("");

    return { search, newMessageArray };
  },
};
</script>
