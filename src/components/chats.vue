<template>
  <button class="btn rounded-full shadow" onclick="chatModal.showModal()">
    <Icon icon="ant-design:message-filled" class="text-xl" />
  </button>

  <dialog id="chatModal" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-xl">Chats</h3>
      <hr class="border border-gray-400/10" />
      <div class="flex justify-start items-center gap-2 my-2">
        <router-link
          to="yourChats"
          class="btn btn-sm border border-none shadow text-blue-500 rounded-full"
        >
          Inbox
        </router-link>
        <router-link
          to="chefs"
          class="hover:bg-blue-500/10 hover:text-blue-500 transition px-4 py-1.5 font-semibold text-sm rounded-full"
        >
          Chefs
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
<script>
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
  setup() {
    return {};
  },
};
</script>
