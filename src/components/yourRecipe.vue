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
          <div class="dropdown absolute -top-1 -right-1 text-gray-800 shadow">
            <button
              class="flex justify-center items-center"
              @click.stop="editShowRecipe(item.id, item)"
            >
              <div
                tabindex="0"
                role="button"
                class="btn btn-primary rounded-md btn-xs"
              >
                <Icon
                  icon="material-symbols-light:settings-outline"
                  class="text-xl"
                />
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
                @click.stop="deleteShowRecipe(id)"
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
      <!-- modal for edit -->
      <dialog id="my_modal_edit" class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-4xl">Edit Recipe</h3>
          <div class="py-2">
            <label class="block text-sm font-medium text-primary">Title</label>
            <input
              type="text"
              v-model="selectedRecipe.title"
              class="input input-bordered w-full max-w-xs"
            />
          </div>
          <div class="py-2">
            <label class="block text-sm font-medium text-primary"
              >Description</label
            >
            <textarea
              class="textarea textarea-bordered w-full"
              v-model="selectedRecipe.descriptions"
            ></textarea>
          </div>
          <div class="py-2">
            <label class="block text-sm font-medium text-primary"
              >Ingredients</label
            >
            <div class="border border-gray-400/50 p-2 rounded-md">
              <div
                v-for="(ingredient, index) in selectedRecipe.allIngredients"
                :key="index"
                class="flex items-center space-x-2"
              >
                <span>{{ index + 1 }}.</span>
                <input
                  type="text"
                  v-model="selectedRecipe.allIngredients[index]"
                  class="input my-1 input-bordered w-full capitalize"
                />
              </div>
            </div>
          </div>
          <div class="py-2">
            <label class="block text-sm font-medium text-primary"
              >Instructions</label
            >
            <div class="border border-gray-400/50 p-2 rounded-md">
              <div
                v-for="(instruction, index) in selectedRecipe.allInstructions"
                :key="index"
                class="flex items-center space-x-2"
              >
                <span>{{ index + 1 }}.</span>
                <input
                  type="text"
                  v-model="selectedRecipe.allInstructions[index]"
                  class="input my-1 input-bordered w-full capitalize"
                />
              </div>
            </div>
          </div>
          <div class="modal-action">
            <button
              @click.stop="saveEditRecipe"
              class="btn text-green-500 w-32"
            >
              Update
            </button>
            <form method="dialog">
              <button class="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <!-- modal for delete confirmation -->
      <dialog id="my_modal_delete" class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you sure you want to delete this recipe?
          </h3>
          <div class="modal-action">
            <button @click.stop="deleteRecipe" class="btn text-red-500 w-32">
              Delete
            </button>
            <form method="dialog">
              <button class="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <!-- show modal -->
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

    const editShowRecipe = (id, item) => {
      selectedRecipe.value = item;
      editId.value = id;
    };
    const deleteShowRecipe = () => {
      const modal = document.getElementById("my_modal_delete");
      modal.showModal();
    };
    const editRecipe = () => {
      console.log("edit recipe", editId.value);
      const modal = document.getElementById("my_modal_edit");
      modal.showModal();
    };
    const deleteRecipe = () => {
      console.log("delete recipe", editId.value);
    };
    const saveEditRecipe = () => {
      console.log("save edit recipe", editId.value);
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
      deleteShowRecipe,
      showRecipeModal,
      selectedRecipe,
      editRecipe,
      deleteRecipe,
      saveEditRecipe,
    };
  },
};
</script>
