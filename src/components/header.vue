<template>
  <div class="flex justify-between items-center border-b border-gray-400/20">
    <div class="flex justify-start items-center gap-1 p-2">
      <div>
        <img
          class="h-8 w-8 rounded-full"
          loading="lazy"
          :src="Food"
          alt="logo"
        />
      </div>

      <h1 class="font-medium text-xs sm:text-sm capitalize hidden sm:block">
        Jm's recipe
      </h1>
    </div>

    <div class="flex justify-center items-center gap-2">
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
      <!--  -->

      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="relative">
          <div class="avatar">
            <div class="size-9">
              <img
                class="rounded-full"
                loading="lazy"
                :src="user.photoURL"
                alt="profile"
              />
            </div>
          </div>
          <div
            class="absolute bottom-1 border border-gray-500/10 right-0 p-[1px] backdrop-blur-2xl rounded-full"
          >
            <Icon icon="solar:settings-bold" width="10" />
          </div>
        </div>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu border border-gray-400/10 p-2 shadow-lg bg-base-100 rounded-md min-w-72"
        >
          <div
            class="py-2 flex justify-start items-center gap-2.5 px-2 border border-gray-500/10 shadow rounded-md"
          >
            <div class="size-9">
              <img
                class="rounded-full"
                loading="lazy"
                :src="user.photoURL"
                alt="profile"
              />
            </div>
            <h1 class="font-semibold text-sm">{{ user.displayName }}</h1>
          </div>
          <div
            class="flex justify-start items-center gap-2.5 my-2 hover:bg-gray-500/20 rounded-md cursor-pointer p-2"
            @click="logout()"
          >
            <div class="p-2 rounded-full bg-gray-500/20">
              <Icon icon="solar:logout-bold-duotone" class="text-xl" />
            </div>
            <p class="text-sm font-semibold">Logout</p>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { useAuth } from "../firebase";
import Food from "../assets/food.svg";

const { user, logout } = useAuth();
</script>
