<template>
  <div class="border rounded-md border-gray-400/50 p-2 my-3">
    <h1 class="font-semibold py-2 text-blue-500">All Recipes</h1>
    <div class="flex justify-center sm:justify-start items-center">
      <div class="grid grid-cols-3 lg:grid-cols-5 gap-1 sm:gap-3">
        <div
          v-for="item in recipe"
          :key="item.id"
          class="card sm:w-52 w-26 bg-base-100 shadow-xl relative rounded-md"
        >
          <div
            class="rounded-full absolute -top-1 -left-1 shadow-xl border border-secondary"
          >
            <div class="flex justify-center items-center">
              <img
                class="h-8 w-8 rounded-full"
                v-if="item.userPhotoUrl && !isLoading"
                :src="item.userPhotoUrl"
                alt="profile"
                @load="isLoading = false"
                @error="isLoading = false"
              />
              <div
                v-else
                class="bg-primary text-neutral shadow rounded-full p-1"
              >
                <Icon icon="mdi:user" class="text-xl" />
              </div>
            </div>
          </div>

          <figure>
            <img :src="item.imageURL" alt="recipe" class="rounded-md" />
          </figure>
          <div class="px-1 py-2">
            <h2 class="card-title">{{ item.title }}</h2>
            <p class="text-xs truncate">
              {{ item.descriptions }}
            </p>
            <p
              class="sm:text-xs py-0.5 text-[10px] font-medium px-2 rounded-full text-blue-500 truncate bg-blue-500/20"
            >
              {{ item.userName }}
            </p>
          </div>
        </div>
        <div v-if="loading">
          <Loading />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Loading from "../components/loading.vue";
import { Icon } from "@iconify/vue";
import { ref, watch, onUnmounted } from "vue";
import { getAuth } from "firebase/auth";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  getFirestore,
} from "firebase/firestore";

export default {
  components: {
    Loading,
    Icon,
  },
  setup() {
    const loading = ref(true);

    const auth = getAuth();
    const user = ref(auth.currentUser);
    const firestore = getFirestore();
    const isLoading = true;

    const recipe = ref([]);

    const recipeCollection = collection(firestore, "recipe");
    const recipeQuery = query(recipeCollection, orderBy("createdAt", "asc"));
    const unsubscribe = onSnapshot(recipeQuery, (snapshot) => {
      recipe.value = snapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .reverse();
      loading.value = false;
    });

    const firestoreTimestampToJsDate = (timestamp) => {
      const seconds = timestamp.seconds;
      const milliseconds = timestamp.nanoseconds / 1e6; // Convert nanoseconds to milliseconds
      const jsDate = new Date(seconds * 1000 + milliseconds);
      return jsDate;
    };
    const formatHour = (timestamp) => {
      const date = firestoreTimestampToJsDate(timestamp);
      const year = date.getFullYear().toString().slice(-2);
      const month = date.toLocaleString("default", { month: "short" });
      const day = date.getUTCDate();
      const hours = date.getHours() % 12 || 12;
      const minutes = ("0" + date.getMinutes()).slice(-2);
      const period = date.getHours() < 12 ? "am" : "pm";
      return `${day} ${month} ${year} (${hours}:${minutes} ${period})`;
    };

    onUnmounted(() => {
      unsubscribe();
    });

    console.log(recipe);
    return {
      loading,
      recipe,
      formatHour,
      isLoading,
    };
  },
};
</script>
