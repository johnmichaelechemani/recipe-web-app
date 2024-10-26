<script setup>
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import Search from "../components/Search.vue";

const router = useRouter();
</script>
<template>
  <div class="flex justify-center items-center" v-motion-fade>
    <div class="w-full">
      <div class="flex">
        <div class="overflow-hidden">
          <div class="py-2 flex justify-start items-center gap-1">
            <div
              class="p-2 rounded-full hover:bg-gray-500/20 transition"
              @click="router.back()"
            >
              <Icon icon="line-md:arrow-left" width="20" height="20" />
            </div>
            <h1 class="text-xl font-semibold">Chats</h1>
          </div>
          <div>
            <Search />
          </div>
          <div>
            <div class="flex justify-start items-center gap-2 mt-2 mb-4">
              <router-link to="messages">
                <button
                  class="rounded-full tracking-wide"
                  :class="
                    $route.path === '/messages'
                      ? 'btn btn-sm bg-blue-400/10 text-blue-500 '
                      : 'hover:bg-blue-500/10 hover:text-blue-400 text-gray-400 transition px-4 py-1.5 font-semibold text-xs'
                  "
                >
                  Inbox
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

            <router-view />
          </div>
        </div>
        <div class="border-l border-gray-500/20 min-w-52 h-screen">
          <div>Select a Message</div>
        </div>
      </div>
    </div>
  </div>
</template>
