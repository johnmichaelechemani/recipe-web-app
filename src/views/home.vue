<template>
  <div class="p-2">
    <Header />
    <button class="btn mt-5 btn-primary rounded-full">
      <Icon icon="ci:add-plus" class="text-2xl" />Add Recipes
    </button>
    <div class="py-2">
      <h1 class="font-semibold py-2">Your Recipes</h1>
      <div class="flex justify-center sm:justify-start items-center">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
        >
          <div class="card w-52 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div class="card-body p-3">
              <h2 class="card-title">Adobo</h2>
              <p class="text-xs">OCT 12,2024</p>
            </div>
          </div>
          <div class="card w-52 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div class="card-body p-3">
              <h2 class="card-title">Ginisa</h2>
              <p class="text-xs">OCT 12,2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-2 pb-7 px-3 my-2 border rounded-md border-gray-400/50">
      <h1 class="font-semibold py-2 text-blue-500">All Recipes</h1>
      <div class="flex justify-center sm:justify-start items-center">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
        >
          <div class="card w-52 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div class="px-3 py-4">
              <h2 class="card-title">Adobo</h2>
              <span
                class="text-xs font-semibold px-4 py-1 rounded-full text-blue-500 bg-blue-500/20"
                >ni Jeric Banalnal</span
              >
            </div>
          </div>
          <div class="card w-52 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div class="px-3 py-4">
              <h2 class="card-title">Ginisa</h2>
              <span
                class="text-xs font-semibold px-4 py-1 rounded-full text-blue-500 bg-blue-500/20"
                >ni Jeric Banalnal</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue";
import Header from "../components/header.vue";
export default {
  components: {
    Header,
    Icon,
  },
};
</script>
