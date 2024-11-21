<template>
  <div class="flex justify-center items-center h-dvh w-full">
    <div
      class="grid grid-cols-1 mx-5 max-w-6xl place-items-center gap-8 sm:grid-cols-2 w-full text-neutral"
    >
      <div>
        <h1 class="sm:text-7xl my-3 text-5xl font-extrabold">
          Post recipe & message your <span class="text-primary">chefs</span>
        </h1>
        <div>
          <span class="text-sm"
            >By: <span class="font-semibold">John Michael Echemani</span></span
          >
        </div>
      </div>
      <div class="px-5 py-5 border border-gray-500/20 rounded-2xl shadow-lg">
        <h1 class="text-3xl font-semibold py-2">Log in 🥺</h1>
        <button
          @click="signInWithGoogle()"
          class="btn items-center justify-between w-full gap-2 my-5 rounded-full"
        >
          <Icon icon="devicon:google" class="text-xl" />
          Google
        </button>
        <p class="text-sm py-2 font-medium">
          You only need <span class="text-primary">GOOGLE</span> no need more
          than that.
        </p>
      </div>
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
