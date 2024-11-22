<template>
  <div class="flex justify-center items-center h-dvh w-full">
    <div
      class="grid grid-cols-1 mx-5 max-w-6xl place-items-center gap-8 sm:grid-cols-2 w-full text-neutral"
    >
      <div>
        <h1 class="sm:text-7xl px-2.5 my-3 text-5xl font-extrabold">
          Post recipe & message your <span class="text-primary">chefs</span>
          <span class="text-xs font-medium px-1"
            >well, once you login you're a chef.🤣</span
          >
        </h1>
        <div>
          <span class="text-sm px-2.5"
            >By: <span class="font-semibold">John Michael Echemani</span></span
          >
        </div>
        <div class="flex justify-start flex-wrap items-center">
          <div class="flex justify-start items-center gap-2">
            <a
              target="_blank"
              href="https://web.facebook.com/jmechemani"
              class="flex justify-start hover:bg-gray-500/10 p-2 rounded-full items-center gap-2"
            >
              <div class="p-2 rounded-full bg-gray-500/20">
                <Icon icon="ri:facebook-fill" width="20" height="20" />
              </div>
              <p class="text-sm font-medium">Facebook</p></a
            >
          </div>
          <div class="flex justify-start items-center gap-2">
            <a
              href="https://www.linkedin.com/in/john-michael-echemani-909391264/"
              target="_blank"
              class="flex justify-start hover:bg-gray-500/10 p-2 rounded-full items-center gap-2"
            >
              <div class="p-2 rounded-full bg-gray-500/20">
                <Icon icon="ri:linkedin-fill" width="20" height="20" />
              </div>
              <p class="text-sm font-medium">LinkedIn</p></a
            >
          </div>
          <div class="flex justify-start items-center gap-2">
            <a
              href="https://johnmichael.vercel.app/"
              target="_blank"
              class="flex justify-start hover:bg-gray-500/10 p-2 rounded-full items-center gap-2"
            >
              <div class="p-2 rounded-full bg-gray-500/20">
                <Icon icon="bx:link" width="20" height="20" />
              </div>
              <p class="text-sm font-medium">Portfolio</p></a
            >
          </div>
        </div>
      </div>
      <div
        :class="
          isError ? 'border-red-500/10 bg-red-500/5' : 'border-gray-500/10'
        "
        class="px-5 py-5 border rounded-2xl shadow-lg"
      >
        <h1 class="text-xl font-semibold py-2">Penetrate human. 😇</h1>
        <div
          v-if="isError"
          class="flex justify-center items-center bg-red-500/10 p-2 border rounded-full border-red-500/10 text-red-500"
        >
          <span class="text-sm font-medium">{{ errorMessage }}</span>
        </div>
        <button
          @click="signInWithGoogle()"
          class="btn items-center justify-between bg-gray-500/10 pl-2 pr-4 text-neutral w-full gap-2 my-5 rounded-full"
        >
          <div class="p-2 rounded-full bg-gray-500/10">
            <Icon icon="devicon:google" class="text-xl" />
          </div>
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
<script setup>
import { Icon } from "@iconify/vue";
import { useAuth } from "../firebase.js";

const { signInWithGoogle, errorMessage, isError } = useAuth();
</script>
