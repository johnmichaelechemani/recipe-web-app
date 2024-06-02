<template>
  <div class="py-2">
    <h1 class="font-semibold py-2">Your Recipes</h1>
    <div class="flex justify-center sm:justify-start items-center">
      <div class="grid grid-cols-3 lg:grid-cols-5 gap-1 sm:gap-3">
        <div
          v-for="item in recipe"
          :key="item.id"
          @click="showRecipeModal(item)"
          class="card sm:w-52 w-26 bg-base-100 shadow-xl relative rounded-md"
        >
          <div
            class="dropdown absolute top-0 right-0 px-1 pt-1 bg-primary text-gray-800 shadow"
          >
            <button class="" @click.stop="editShowRecipe(item.id)">
              <div tabindex="0" role="button" class="">
                <Icon icon="material-symbols-light:settings-outline" />
              </div>
            </button>

            <ul
              tabindex="0"
              class="dropdown-content z-[20] menu border border-gray-400/10 p-2 shadow bg-base-100 rounded-md w-32"
            >
              <div
                class="btn flex justify-start text-green-500 mb-1"
                @click.stop="editRecipe(id)"
              >
                <Icon icon="material-symbols:edit" />
                <p class="text-xs">Edit</p>
              </div>
              <div
                class="btn flex justify-start text-red-500"
                @click.stop="deleteRecipe(id)"
              >
                <Icon icon="ant-design:delete-twotone" />
                <p class="text-xs">Delete</p>
              </div>
            </ul>
          </div>

          <figure>
            <img :src="item.imageURL" alt="recipe" class="rounded-md" />
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

      <dialog id="my_modal_2" class="modal" ref="recipeModal">
        <div class="modal-box">
          <form method="dialog" class="absolute top-0 right-0 p-2 z-10">
            <button>
              <Icon icon="iconamoon:close-duotone" class="text-2xl" />
            </button>
          </form>
          <h3 class="font-bold text-4xl capitalize">
            {{ selectedRecipe.title }}
          </h3>
          <div class="py-4">
            <p class="text-xs text-primary">Discriptions:</p>
            <p class="capitalize">
              {{ selectedRecipe.descriptions }}
            </p>
          </div>

          <div class="py-4">
            <p class="text-xs text-primary">Ingredients:</p>
            <ul>
              <li
                v-for="(ingredient, index) in selectedRecipe.allIngredients"
                :key="ingredient.id"
                class="capitalize"
              >
                {{ index + 1 }}. {{ ingredient }}
              </li>
            </ul>
          </div>

          <div class="py-4">
            <p class="text-xs text-primary">Instructions:</p>
            <ol>
              <li
                v-for="(instruction, index) in selectedRecipe.allInstructions"
                :key="instruction.id"
              >
                {{ index + 1 }}. {{ instruction }}
              </li>
            </ol>
          </div>
        </div>
      </dialog>
    </div>
  </div>
</template>
<script>
import Loading from "../components/loading.vue";
import { ref, watch, onUnmounted } from "vue";
import { getAuth } from "firebase/auth";
import { Icon } from "@iconify/vue";
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

    const recipe = ref([]);
    const selectedRecipe = ref({});

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

    let editId = ref("");
    const showRecipeModal = (item) => {
      selectedRecipe.value = item;
      const modal = document.getElementById("my_modal_2");
      modal.showModal();
    };

    const editShowRecipe = (id) => {
      editId.value = id;
      console.log(editId.value);
    };
    const deleteRecipe = () => {
      console.log("id to delete", editId.value);
    };
    const editRecipe = () => {
      console.log("edit recipe", editId.value);
    };

    onUnmounted(() => {
      unsubscribe();
    });

    // console.log(recipe);
    return {
      loading,
      recipe,
      formatHour,
      editShowRecipe,
      deleteRecipe,
      showRecipeModal,
      selectedRecipe,
      editRecipe,
    };
  },
};
</script>
