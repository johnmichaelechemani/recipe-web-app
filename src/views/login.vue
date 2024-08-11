<template>
  <div class="fixed top-2 left-1/2 transform -translate-x-1/2 z-10">
    <div>
      <div class="px-5 py-2 rounded-full border border-gray-300/10 shadow">
        <h1 class="text-base text-neutral font-semibold text-center">
          Recipe App
        </h1>
      </div>
      <span class="text-xs flex justify-center py-2 text-blue-500 italic"
        >John Michael D. Echemani</span
      >
    </div>
  </div>
  <div class="flex items-center h-screen justify-center text-neutral">
    <div class="px-5 py-5 border border-gray-500/50 rounded-xl shadow-lg">
      <h1 class="text-3xl font-semibold py-2">Log in please... 🥺</h1>
      <button
        @click="signInWithGoogle()"
        class="btn items-center justify-between w-full gap-2 my-5 rounded-full"
      >
        <Icon icon="devicon:google" class="text-xl" />
        Google
      </button>
      <p class="text-xs py-2 font-medium">
        You only need <span class="text-blue-500">GOOGLE</span> no need more than
        that.
      </p>
    </div>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue";
import { useAuth } from "../firebase.js";

export default {
  components: {
    Icon,
  },

  setup() {
    const { signInWithGoogle } = useAuth();

    return {
      signInWithGoogle,
    };
  },
};
</script>
