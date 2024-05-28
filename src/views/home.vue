<template>
  <div class="p-2">
    <Header />
    <AddRecipe />
    <YourRecipe />
    <AllRecipe />
  </div>
</template>
<script>
import { Icon } from "@iconify/vue";
import Header from "../components/header.vue";
import AddRecipe from "../components/addRecipe.vue";
import AllRecipe from "../components/allRecipe.vue";
import YourRecipe from "../components/yourRecipe.vue";
export default {
  components: {
    Header,
    Icon,
    AddRecipe,
    AllRecipe,
    YourRecipe,
  },
};
</script>
