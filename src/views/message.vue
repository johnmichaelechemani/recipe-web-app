<script setup>
import { Icon } from "@iconify/vue";
import Search from "../components/Search.vue";
</script>
<template>
  <div class="relative">
    <div class="fixed min-w-72 overflow-y-auto inset-y-0 left-0">
      <div class="py-3 flex justify-start items-center gap-1">
        <router-link
          to="/recipes"
          class="p-2 rounded-full hover:bg-gray-500/20 transition"
        >
          <Icon icon="line-md:arrow-left" width="20" height="20" />
        </router-link>

        <h1 class="text-xl font-semibold">Chats</h1>
      </div>
      <div class="px-2">
        <Search />
      </div>
      <div>
        <div class="flex justify-start items-center gap-2 px-2 mt-2 mb-4">
          <router-link to="/messages/inbox">
            <button
              class="rounded-full tracking-wide"
              :class="
                $route.path === '/messages/inbox'
                  ? 'btn btn-sm bg-blue-400/10 text-blue-500 '
                  : 'hover:bg-blue-500/10 hover:text-blue-400 text-gray-400 transition px-4 py-1.5 font-semibold text-xs'
              "
            >
              Inbox
            </button>
          </router-link>
          <router-link to="/messages/chefs">
            <button
              class="rounded-full tracking-wide"
              :class="
                $route.path === '/messages/chefs'
                  ? 'btn btn-sm text-blue-500 bg-blue-400/10'
                  : 'hover:bg-blue-500/10 hover:text-blue-500 text-gray-400 transition px-4 py-1.5 font-semibold text-xs'
              "
            >
              Chefs
            </button>
          </router-link>
        </div>

        <div class="px-2">
          <router-view />
        </div>
      </div>
    </div>

    <router-view name="messageBox" />
  </div>
</template>
