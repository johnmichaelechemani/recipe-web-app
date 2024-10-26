<template>
  <div class="flex justify-between items-center border-b border-gray-400/20">
    <div class="flex justify-start items-center gap-1 p-2">
      <div>
        <img
          class="h-8 w-8 rounded-full"
          v-if="user.photoURL"
          :src="user.photoURL"
          loading="lazy"
          alt="profile"
        />
        <div v-else class="bg-primary text-neutral shadow rounded-full p-1">
          <Icon icon="mdi:user" class="text-2xl" />
        </div>
      </div>

      <h1 class="font-medium text-xs sm:text-sm capitalize hidden sm:block">
        {{ user.displayName }}
      </h1>
      <div class="h-3 border-r-2 border-gray-400/50 ml-2"></div>

      <div class="dropdown">
        <div tabindex="0" role="button" class="p-2">
          <Icon icon="solar:settings-bold" />
        </div>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu border border-gray-400/10 p-2 shadow bg-base-100 rounded-md w-32"
        >
          <div class="btn flex justify-start" @click="logout()">
            <Icon icon="solar:logout-bold-duotone" class="text-xl" />
            <p class="text-xs">Logout</p>
          </div>
        </ul>
      </div>
    </div>

    <div>
      <label class="flex cursor-pointer gap-1 sm:gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path
            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
          />
        </svg>
        <input
          type="checkbox"
          value="sunset"
          class="toggle theme-controller w-10 h-4"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
    </div>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue";
import { useAuth } from "../firebase";
export default {
  components: {
    Icon,
  },
  setup() {
    const { user, logout } = useAuth();

    return { user, logout };
  },
};
</script>
