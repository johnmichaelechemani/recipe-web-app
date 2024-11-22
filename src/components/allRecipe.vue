<template>
  <div class="border rounded-2xl border-gray-400/20 shadow p-2 my-3">
    <div class="my-2 flex justify-between items-start">
      <span class="font-semibold text-sm py-1 px-4">All Recipes</span>

      <div class="">
        <div class="dropdown dropdown-bottom dropdown-end">
          <div class="tooltip tooltip-primary" data-tip="Filter">
            <div
              tabindex="0"
              role="button"
              class="btn rounded-full bg-transparent btn-sm px-1.5 hover:text-blue-500"
            >
              <Icon icon="mingcute:filter-3-fill" class="text-xl" />
            </div>
          </div>

          <ul
            tabindex="0"
            class="dropdown-content border border-gray-500/20 menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow"
          >
            <h1 class="font-semibold text-sm">Filter</h1>
            <div class="border border-gray-500/10 rounded-xl mt-2">
              <div
                class="flex justify-start items-center gap-2.5 hover:bg-gray-500/20 rounded-md cursor-pointer p-1.5"
                @click="sortLetters()"
              >
                <div class="p-2 rounded-full bg-gray-500/20">
                  <Icon
                    icon="basil:sort-solid"
                    width="20"
                    height="20"
                    class="text-primary"
                  />
                </div>
                <p class="text-sm font-semibold">A-Z</p>
              </div>
              <div
                class="flex justify-start items-center gap-2.5 hover:bg-gray-500/20 rounded-md cursor-pointer p-1.5"
                @click="sortRatings()"
              >
                <div class="p-2 rounded-full bg-gray-500/20">
                  <Icon
                    icon="material-symbols-light:star-rate"
                    width="20"
                    height="20"
                    class="text-primary"
                  />
                </div>
                <p class="text-sm font-semibold">Ratings</p>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>

    <div v-if="filteredRecipes.length === 0 && !loading" class="w-full">
      <span
        class="text-sm px-4 py-1 w-full rounded-full bg-error/10 font-medium text-error"
        >No Recipe found</span
      >
    </div>

    <div class="flex justify-center sm:justify-start items-center">
      <div
        v-if="filteredRecipes"
        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 overflow-hidden py-5 px-2 sm:p-2"
      >
        <div
          v-for="item in filteredRecipes"
          :key="item.id"
          @click="showRecipeAllModal(item)"
          class="card sm:w-52 w-26 bg-base-100 border border-gray-500/10 transition hover:border-primary/50 hover:shadow relative rounded-2xl"
        >
          <figure class="bg-blue-500/10 rounded-b-sm">
            <div v-if="item.imageURL" class="w-full h-24 sm:h-32 md:h-40">
              <img
                loading="lazy"
                :src="item.imageURL"
                alt="recipe"
                class="rounded-t-2xl object-cover object-center h-full w-full"
              />
            </div>
            <div
              v-else
              class="pt-2 h-24 sm:h-32 md:h-40 flex justify-center items-center"
            >
              <Icon icon="emojione-v1:pot-of-food" class="text-4xl" />
            </div>
          </figure>
          <div class="py-2 px-1">
            <div class="card-title text-sm sm:text-lg truncate">
              <h1 class="truncate">{{ item.title }}</h1>
            </div>

            <p class="text-xs truncate">
              {{ item.descriptions }}
            </p>
            <div
              class="sm:text-xs py-0.5 text-[10px] font-medium rounded-full text-primary truncate"
            >
              {{ item.userName }}
            </div>
            <div class="pt-2">
              <span
                v-if="item.averageRating"
                class="gap-1 text-sm font-medium flex justify-start items-center"
              >
                <Icon icon="ic:round-star" class="text-xl text-yellow-500" />{{
                  item.averageRating.toFixed(1)
                }}
              </span>
            </div>
          </div>
        </div>
        <div v-if="loading" class="flex justify-start items-center gap-2">
          <Loading />
          <Loading />
          <Loading />
          <Loading />
        </div>
      </div>
    </div>

    <!-- modal -->
    <dialog id="my_modal_4" class="modal" ref="recipeModal">
      <div class="modal-box px-2 py-4 no-scrollbar">
        <form method="dialog" class="absolute top-0 right-0 p-2 z-10">
          <button @click="closeModal">
            <Icon icon="iconamoon:close-duotone" class="text-2xl" />
          </button>
        </form>
        <h3 class="font-bold text-3xl capitalize">
          {{ selectedAllRecipe.title }}
        </h3>
        <div>
          <span
            class="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
          >
            {{ selectedAllRecipe.userName }}</span
          >
        </div>

        <div
          class="py-2 flex justify-start items-center"
          v-if="selectedAllRecipe.totalRatings > 0"
        >
          <div v-for="(star, index) in starArray" :key="index">
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

          <span class="px-2 text-sm">{{ selectedAllRecipe.ratingCount }}</span>
        </div>
        <div v-else class="py-2 flex justify-start items-center">
          <div v-for="noStars in 5" :key="noStars.id">
            <Icon icon="ic:outline-star-border" class="text-xl" />
          </div>
        </div>
        <div class="border border-gray-400/10 rounded-2xl shadow">
          <div class="max-h-72 overflow-y-auto no-scrollbar mx-2 my-1">
            <div class="py-4">
              <p class="text-xs text-primary">Discriptions:</p>
              <p class="capitalize font-medium text-sm">
                {{ selectedAllRecipe.descriptions }}
              </p>
            </div>
            <hr class="border border-gray-500/10" />

            <div class="py-4">
              <p class="text-xs text-primary">Ingredients:</p>
              <ItemLists
                :selectedItem="selectedAllRecipe.allIngredients"
                :itemDesables="ingredientsDisables"
                :handleClick="clickIngredients"
              />
            </div>
            <hr class="border border-gray-500/10" />
            <div class="py-4">
              <p class="text-xs text-primary">Instructions:</p>

              <ItemLists
                :selectedItem="selectedAllRecipe.allInstructions"
                :itemDesables="instructionsDisables"
                :handleClick="clickInstructions"
              />
            </div>
          </div>
        </div>

        <div v-if="ratingsInText" class="flex justify-center items-center">
          <span
            class="text-xs tracking-wide bg-blue-500/10 shadow text-blue-500 px-2 py-1 font-semibold rounded-full"
            >{{ ratingsInText }}</span
          >
        </div>

        <div class="flex justify-center gap-1">
          <span class="text-sm font-semibold my-2" v-if="muteRateBnt"
            >Thank's for rating! 😊</span
          >
          <span class="text-lg font-semibold mt-1" v-else
            >Rate this recipe</span
          >
        </div>

        <div class="flex justify-center items-center gap-2">
          <div
            :class="muteRateBnt ? ' hidden' : 'text-yellow-500 '"
            class="text-xl px-4 py-2 rounded-full flex gap-1"
          >
            <div v-for="star in 5" :key="star">
              <button
                :disabled="muteRateBnt"
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
        </div>
        <div class="flex justify-center items-center my-2" v-if="ratingsInText">
          <button
            :disabled="ratings === 0"
            class="btn px-6 shadow rounded-full btn-primary flex justify-center items-center"
            @click="sendRatings"
          >
            Submit

            <span
              v-if="sendingRatingLoading"
              class="loading loading-dots loading-xs"
            ></span>
          </button>
        </div>
      </div>
    </dialog>
  </div>
</template>
<script>
import Loading from "../components/loading.vue";
import { Icon } from "@iconify/vue";
import { getAllRecipe, useAuth } from "../firebase";
import { ref, watch, onUnmounted, computed, reactive } from "vue";
import ItemLists from "./ItemLists.vue";
export default {
  props: {
    searchQuery: {
      type: String,
      default: "",
    },
  },
  components: {
    Loading,
    Icon,
    ItemLists,
  },
  setup(props, index) {
    const {
      sendingRatingLoading,
      recipe,
      formatHour,
      isLoading,
      loading,
      showRecipeAllModal,
      selectedAllRecipe,
      ratings,
      setRating,
      closeModal,
      ratingsInText,
      sendRatings,
      starArray,
      filteredRecipes,
      muteRateBnt,
      clickInstructions,
      instructionsDisables,
      clickIngredients,
      ingredientsDisables,
    } = getAllRecipe(props, index);
    const { collection, query, onSnapshot, firestore } = useAuth();

    const userContainer = ref([]);
    const usersStatus = reactive({});

    // Define Firestore collection and query
    const usersCollection = collection(firestore, "users");
    const usersQuery = query(usersCollection);

    const unsubscribe = onSnapshot(usersQuery, (snapshot) => {
      const users = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      localStorage.setItem("users", JSON.stringify(users));

      userContainer.value = users;
      users.forEach((user) => {
        usersStatus[user.id] = user.status;
      });
    });
    const sortLetters = () => {
      recipe.value = recipe.value.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    };

    const sortRatings = () => {
      recipe.value = recipe.value.sort(
        (a, b) => b.averageRating - a.averageRating
      );
    };
    onUnmounted(() => {
      unsubscribe();
    });

    return {
      loading,
      sendingRatingLoading,
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
      filteredRecipes,
      muteRateBnt,
      usersStatus,
      clickInstructions,
      instructionsDisables,
      clickIngredients,
      ingredientsDisables,
      sortLetters,
      sortRatings,
    };
  },
};
</script>
