<template>
  <div class="flex justify-between items-center border-b border-gray-400/20">
    <div class="flex justify-start items-center gap-1 p-2">
      <div>
        <img
          class="size-9 rounded-full"
          loading="lazy"
          :src="Food"
          alt="logo"
        />
      </div>

      <h1 class="font-medium text-xs sm:text-sm capitalize">Jm's recipe</h1>
    </div>

    <div class="flex justify-center items-start gap-2">
      <label class="swap swap-rotate p-1.5 bg-gray-500/10 rounded-full">
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" class="theme-controller" value="sunset" />

        <!-- sun icon -->
        <svg
          class="swap-off size-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
          />
        </svg>

        <!-- moon icon -->
        <svg
          class="swap-on size-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
          />
        </svg>
      </label>

      <!--  -->

      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="relative">
          <div class="">
            <div class="size-8">
              <img
                class="rounded-full"
                loading="lazy"
                :src="user.photoURL"
                alt="profile"
              />
            </div>
          </div>
          <div
            class="absolute bottom-0 border border-base-100 right-0 bg-base-100 rounded-full"
          >
            <Icon icon="solar:settings-bold" width="10" />
          </div>
        </div>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu border border-gray-500/10 p-2 shadow-lg bg-base-100 rounded-2xl min-w-72"
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
