<template>
  <router-link to="yourChats">
    <button class="btn rounded-full shadow" onclick="chatModal.showModal()">
      <Icon icon="ant-design:message-filled" class="text-xl" />
    </button>
  </router-link>

  <dialog id="chatModal" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-xl">Chats</h3>
      <hr class="border border-gray-400/10 my-1" />
      <div class="flex justify-start items-center gap-2 mt-2 mb-4">
        <router-link to="yourChats">
          <button
            class="rounded-full"
            :class="
              $route.path === '/yourChats'
                ? 'btn btn-sm text-blue-500 shadow'
                : 'hover:bg-blue-500/10 hover:text-blue-500 transition px-4 py-1.5 font-semibold text-sm'
            "
          >
            Inbox
          </button>
        </router-link>
        <router-link to="chefs">
          <button
            class="rounded-full"
            :class="
              $route.path === '/chefs'
                ? 'btn btn-sm text-blue-500 shadow'
                : 'hover:bg-blue-500/10 hover:text-blue-500 transition px-4 py-1.5 font-semibold text-sm'
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
