<template>
  <div class="py-2">
    <h1 class="font-semibold py-2">Your Recipes</h1>
    <div class="flex justify-center sm:justify-start items-center">
      <div class="grid grid-cols-3 lg:grid-cols-5 gap-1 sm:gap-3">
        <div
          v-for="item in recipe"
          :key="item.id"
          class="card sm:w-52 w-26 bg-base-100 shadow-xl rounded-md"
        >
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div class="card-body p-3">
            <h2 class="card-title">{{ item.title }}</h2>
            <p class="text-xs truncate">
              {{ item.descriptions }}
            </p>
            <p class="text-[10px] font-medium">
              {{ formatHour(item.createdAt) }}
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
  },
  setup() {
    const loading = ref(true);

    const auth = getAuth();
    const user = ref(auth.currentUser);
    const firestore = getFirestore();

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
    };
  },
};
</script>
