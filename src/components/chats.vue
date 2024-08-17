<template>
  <router-link to="yourChats" class="relative">
    <button class="btn rounded-full shadow" onclick="chatModal.showModal()">
      <Icon icon="ant-design:message-filled" class="text-xl" />
    </button>
    <!-- <div class="absolute -top-2 -right-2">
      <span class="badge badge-primary font-semibold">2</span>
    </div> -->
  </router-link>

  <dialog id="chatModal" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-xl">Chats</h3>
      <hr class="border border-gray-400/10 my-1" />
      <div class="my-3 flex justify-start gap-2 items-center">
        <input
          type="text"
          placeholder="Search"
          class="input input-bordered input-sm w-full rounded-full"
        />
        <div
          class="p-1 cursor-pointer rounded-full hover:bg-primary/10 text-orange-500 transition"
        >
          <Icon icon="lets-icons:search-light" class="text-2xl" />
        </div>
      </div>

      <div class="flex justify-start items-center gap-2 mt-2 mb-4">
        <router-link to="yourChats">
          <button
            class="rounded-full tracking-wide"
            :class="
              $route.path === '/yourChats'
                ? 'btn btn-sm bg-blue-400/10 text-blue-500 '
                : 'hover:bg-blue-500/10 hover:text-blue-400 text-gray-400 transition px-4 py-1.5 font-semibold text-xs'
            "
          >
            Home
          </button>
        </router-link>
        <router-link to="chefs">
          <button
            class="rounded-full tracking-wide"
            :class="
              $route.path === '/chefs'
                ? 'btn btn-sm text-blue-500 bg-blue-400/10'
                : 'hover:bg-blue-500/10 hover:text-blue-500 text-gray-400 transition px-4 py-1.5 font-semibold text-xs'
            "
          >
            Chefs
          </button>
        </router-link>
      </div>
      <div>
        <router-view />
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
<script setup>
import { Icon } from "@iconify/vue";
</script>
