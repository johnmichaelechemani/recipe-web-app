<template>
  <div class="border rounded-md border-gray-400/50 p-2 my-3">
    <h1 class="font-semibold py-2 text-blue-500">All Recipes</h1>
    <div class="flex justify-center sm:justify-start items-center">
      <div
        class="grid grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 overflow-hidden py-5 px-2 sm:p-2"
      >
        <div
          v-for="item in recipe"
          :key="item.id"
          @click="showRecipeAllModal(item)"
          class="card sm:w-52 w-26 bg-base-100 shadow border border-gray-200/10 relative rounded-md"
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
            <img
              v-if="item.imageURL"
              :src="item.imageURL"
              alt="recipe"
              class="rounded-md"
            />
            <div v-else class="pt-2">
              <Icon icon="emojione-v1:pot-of-food" class="text-4xl" />
            </div>
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

      <!-- modal -->
      <dialog id="my_modal_4" class="modal" ref="recipeModal">
        <div class="modal-box">
          <form method="dialog" class="absolute top-0 right-0 p-2 z-10">
            <button @click="closeModal">
              <Icon icon="iconamoon:close-duotone" class="text-2xl" />
            </button>
          </form>
          <h3 class="font-bold text-4xl capitalize">
            {{ selectedAllRecipe.title }} <span class="text-xs">ni</span>
          </h3>
          <div>
            <span
              class="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
            >
              {{ selectedAllRecipe.userName }}</span
            >
          </div>

          <div class="py-2 flex justify-start items-center">
            <div
              v-if="selectedAllRecipe.totalRatings > 0"
              v-for="(star, index) in starArray"
              :key="index"
            >
              <Icon
                :icon="
                  star === 'full'
                    ? 'ic:round-star'
                    : star === 'half'
                    ? 'ic:round-star-half'
                    : 'ic:outline-star-border'
                "
                class="text-xl text-yellow-500"
              />
            </div>

            <div v-else class="py-2 flex justify-start items-center">
              <div v-for="noStars in 5" :key="noStars.id">
                <Icon icon="ic:outline-star-border" class="text-xl" />
              </div>
            </div>
            <span class="px-2 text-sm">{{
              selectedAllRecipe.ratingCount
            }}</span>
          </div>

          <hr class="border border-gray-500/10" />
          <div class="py-4">
            <p class="text-xs text-primary">Discriptions:</p>
            <p class="capitalize">
              {{ selectedAllRecipe.descriptions }}
            </p>
          </div>
          <hr class="border border-gray-500/10" />

          <div class="py-4">
            <p class="text-xs text-primary">Ingredients:</p>
            <ul>
              <li
                v-for="(ingredient, index) in selectedAllRecipe.allIngredients"
                :key="ingredient.id"
                class="capitalize"
              >
                {{ index + 1 }}. {{ ingredient }}
              </li>
            </ul>
          </div>
          <hr class="border border-gray-500/10" />
          <div class="py-4">
            <p class="text-xs text-primary">Instructions:</p>
            <ol>
              <li
                v-for="(
                  instruction, index
                ) in selectedAllRecipe.allInstructions"
                :key="instruction.id"
              >
                {{ index + 1 }}. {{ instruction }}
              </li>
            </ol>
          </div>
          <hr class="border border-gray-500/10 my-2" />
          <div v-if="ratingsInText">
            <span
              class="text-sm tracking-wide bg-blue-500/10 shadow text-blue-500 px-2 py-1 rounded-full"
              >{{ ratingsInText }}</span
            >
          </div>
          <div class="flex justify-start items-center gap-2">
            <div class="flex gap-1">
              <span class="text-sm font-semibold">RATE:</span>
            </div>
            <div
              class="text-yellow-500 text-xl px-1 border border-yellow-500/50 py-1 rounded-full flex gap-1"
            >
              <div v-for="star in 5" :key="star">
                <button
                  @click="setRating(star, selectedAllRecipe.id)"
                  class="flex justify-center items-center"
                >
                  <Icon
                    :icon="
                      ratings >= star
                        ? 'ic:outline-star'
                        : 'ic:outline-star-border'
                    "
                  />
                </button>
              </div>
            </div>

            <button class="btn shadow rounded-full" @click="sendRatings">
              Send
              <Icon icon="iconamoon:send-fill" class="text-primary text-xl" />
            </button>
          </div>
        </div>
      </dialog>
    </div>
  </div>
</template>
<script>
import Loading from "../components/loading.vue";
import { Icon } from "@iconify/vue";
import { ref, watch, onUnmounted, computed } from "vue";
import { getAuth } from "firebase/auth";
import {
  query,
  collection,
  orderBy,
  updateDoc,
  doc,
  getDoc,
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
    const { uid } = user.value;
    const userId = uid;

    const recipe = ref([]);
    const selectedAllRecipe = ref({});
    let ratings = ref(0);
    const ratingTexts = {
      1: "Poor",
      2: "Fair",
      3: "Good",
      4: "Very Good",
      5: "Excellent",
    };

    const ratingsInText = computed(() => ratingTexts[ratings.value] || "");

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

    const showRecipeAllModal = (item) => {
      selectedAllRecipe.value = item;
      console.log(selectedAllRecipe.value);
      const modal = document.getElementById("my_modal_4");
      modal.showModal();
    };

    const closeModal = () => {
      ratings.value = 0;
      const modal = document.getElementById("my_modal_4");
      modal.close();
    };

    let recipeId = ref("");
    const setRating = (star, id) => {
      recipeId.value = id;
      ratings.value = star;
    };

    const updateRecipeRatings = async (recipeId, newRating) => {
      try {
        const recipeDocRef = doc(firestore, "recipe", recipeId);
        const recipeDoc = await getDoc(recipeDocRef);

        if (recipeDoc.exists()) {
          const recipeData = recipeDoc.data();
          const currentTotalRatings = recipeData.totalRatings || 0;
          const currentRatingCount = recipeData.ratingCount || 0;

          const updatedTotalRatings = currentTotalRatings + newRating;
          const updatedRatingCount = currentRatingCount + 1;
          const updatedAverageRating = updatedTotalRatings / updatedRatingCount;

          await updateDoc(recipeDocRef, {
            totalRatings: updatedTotalRatings,
            ratingCount: updatedRatingCount,
            averageRating: updatedAverageRating,
          });

          console.log(
            `Updated recipe ${recipeId} with new ratings and average rating.`
          );
        } else {
          console.log("No such recipe document!");
        }
      } catch (error) {
        console.error("Error updating ratings: ", error);
      }
    };

    const sendRatings = async () => {
      const newRating = ratings.value;
      const recipeIds = recipeId.value;

      await updateRecipeRatings(recipeIds, newRating);
      closeModal();
    };

    const starArray = computed(() => {
      const stars = [];
      const rating = selectedAllRecipe.value.averageRating || 0;
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 !== 0;

      for (let i = 0; i < fullStars; i++) {
        stars.push("full");
      }
      if (hasHalfStar) {
        stars.push("half");
      }
      while (stars.length < 5) {
        stars.push("empty");
      }
      return stars;
    });

    onUnmounted(() => {
      unsubscribe();
    });

    return {
      loading,
      recipe,
      formatHour,
      isLoading,
      showRecipeAllModal,
      selectedAllRecipe,
      ratings,
      setRating,
      closeModal,
      ratingsInText,
      sendRatings,
      starArray,
    };
  },
};
</script>
