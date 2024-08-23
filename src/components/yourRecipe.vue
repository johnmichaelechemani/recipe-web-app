<template>
  <div class="border rounded-2xl border-gray-400/50 p-2 my-3">
    <div class="my-2">
      <span class="font-semibold text-sm py-1 px-4 bg-gray-500/10 rounded-full"
        >Your Recipes</span
      >
    </div>
    <div class="flex justify-center sm:justify-start items-center">
      <div
        v-if="recipe"
        class="grid grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-3 overflow-hidden py-5 sm:p-2"
      >
        <div
          v-for="item in recipe"
          :key="item.id"
          @click="showRecipeModal(item)"
          class="card sm:w-52 w-26 bg-base-100 shadow border border-gray-200/10 relative rounded-md"
        >
          <div
            class="dropdown dropdown-end absolute z-50 top-0 right-0 text-gray-800 shadow"
          >
            <button
              class="flex justify-center items-center"
              @click.stop="editShowRecipe(item.id, item)"
            >
              <div
                tabindex="0"
                role="button"
                class="btn btn-primary rounded-none btn-xs"
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
            <div
              v-if="item.imageURL"
              class="w-full bg-primary/10 h-24 sm:h-30 md:h-40"
            >
              <img
                :src="item.imageURL"
                alt="recipe"
                class="object-cover object-center h-full w-full rounded-md"
              />
            </div>
            <div
              v-else
              class="pt-2 h-24 sm:h-32 md:h-40 flex justify-center items-center"
            >
              <Icon icon="emojione-v1:pot-of-food" class="text-4xl" />
            </div>
          </figure>
          <div class="card-body p-3">
            <h2 class="card-title truncate">{{ item.title }}</h2>
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
      <div v-if="recipe.length === 0 && !loading">
        <div
          class="font-semibold text-sm px-4 py-2 w-full bg-blue-300/10 rounded-full shadow"
        >
          You don't have recipe yet.
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
              class="input input-bordered w-full"
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
              <div class="flex justify-start items-center gap-1">
                <input
                  type="text"
                  v-model="editAddIngredient"
                  class="input my-1 input-bordered w-full capitalize"
                />
                <div class="py-1">
                  <button
                    :disabled="editAddIngredient === ''"
                    class="btn btn-primary"
                    @click="addIngredient"
                  >
                    Add
                  </button>
                </div>
              </div>
              <hr class="my-1 border border-gray-400/20" />
              <div
                v-for="(ingredient, index) in selectedRecipe.allIngredients"
                :key="index"
                class="flex items-center space-x-2"
              >
                <span class="text-xs font-semibold">{{ index + 1 }}.</span>
                <input
                  type="text"
                  v-model="selectedRecipe.allIngredients[index]"
                  class="input my-1 input-bordered input-sm w-full capitalize"
                />
                <button
                  class="btn text-xl btn-sm px-1.5"
                  @click.prevent="removeIngredient(index)"
                >
                  <Icon icon="ri:close-line" class="text-red-500" />
                </button>
              </div>
            </div>
          </div>
          <div class="py-2">
            <label class="block text-sm font-medium text-primary"
              >Instructions</label
            >
            <div class="border border-gray-400/50 p-2 rounded-md">
              <div class="flex justify-start items-center gap-1">
                <input
                  type="text"
                  v-model="editAddInstruction"
                  class="input my-1 input-bordered w-full capitalize"
                />
                <div class="py-1">
                  <button
                    :disabled="editAddInstruction === ''"
                    class="btn btn-primary"
                    @click="addInstruction"
                  >
                    Add
                  </button>
                </div>
              </div>
              <hr class="my-1 border border-gray-400/20" />
              <div
                v-for="(instruction, index) in selectedRecipe.allInstructions"
                :key="index"
                class="flex items-center space-x-2"
              >
                <span class="text-xs font-semibold">{{ index + 1 }}.</span>
                <input
                  type="text"
                  v-model="selectedRecipe.allInstructions[index]"
                  class="input my-1 input-bordered input-sm w-full capitalize"
                />
                <button
                  class="btn btn-sm px-1.5 text-xl"
                  @click.prevent="removeInstruction(index)"
                >
                  <Icon icon="ri:close-line" class="text-red-500" />
                </button>
              </div>
            </div>
          </div>
          <div class="py-2">
            <label class="block text-sm font-medium text-primary">Image</label>
            <div v-if="imageURL || selectedRecipe.imageURL" class="relative">
              <button
                v-if="imageURL"
                @click="clearImageSelection"
                class="absolute -top-1 -right-1 z-10 btn btn-xs"
              >
                <Icon icon="ri:close-line" class="text-red-500 text-xl" />
              </button>
              <img
                v-if="imageURL || selectedRecipe.imageURL"
                :src="imageURL || selectedRecipe.imageURL"
                alt="recipe"
                class="w-min rounded-md my-1"
              />
            </div>
            <div v-else class="my-1">
              <span
                class="text-sm font-medium px-4 py-1 bg-primary/10 rounded-full text-error"
                >No image atm.</span
              >
            </div>

            <div class="flex items-center justify-center w-full my-2">
              <label
                for="dropzone-files"
                class="flex flex-col items-center justify-center w-full border border-gray-400/50 h-20 rounded-md cursor-pointer"
              >
                <div
                  class="flex flex-col items-center justify-center pt-5 pb-6"
                >
                  <Icon icon="solar:upload-bold-duotone" class="text-xl" />
                  <p class="mb-2 text-sm">
                    <span class="font-semibold">Click to upload</span>
                  </p>
                  <span v-if="imageName" class="text-xs">{{ imageName }}</span>
                </div>
                <input
                  id="dropzone-files"
                  accept="image/*"
                  type="file"
                  class="hidden"
                  @change="handleImageUpload"
                />
              </label>
            </div>
          </div>
          <div class="modal-action">
            <button @click.stop="saveEditRecipe" class="btn btn-success w-32">
              Update
              <span
                v-if="isSaveloading"
                class="loading loading-dots loading-xs"
              ></span>
            </button>
            <form method="dialog">
              <button class="btn">Cancel</button>
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
            <button @click.stop="deleteRecipe" class="btn btn-error w-32">
              Delete
              <span
                v-if="isSaveloading"
                class="loading loading-dots loading-xs"
              ></span>
            </button>
            <form method="dialog">
              <button class="btn">Cancel</button>
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
            <p class="capitalize font-medium text-sm">
              {{ selectedRecipe.descriptions }}
            </p>
          </div>
          <hr class="border border-gray-500/10" />
          <div class="py-4">
            <p class="text-xs text-primary">Ingredients:</p>
            <ul>
              <li
                v-for="(ingredient, index) in selectedRecipe.allIngredients"
                :key="ingredient.id"
                class="capitalize"
              >
                <div class="flex justify-start items-center gap-4 my-1">
                  <span class="text-xs">{{ index + 1 }}</span>
                  <div
                    class="text-xs px-2 py-1 bg-gray-400/10 font-medium rounded-md"
                  >
                    {{ ingredient }}
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <hr class="border border-gray-500/10" />

          <div class="py-4">
            <p class="text-xs text-primary">Instructions:</p>
            <ol>
              <li
                v-for="(instruction, index) in selectedRecipe.allInstructions"
                :key="instruction.id"
              >
                <div class="flex justify-start items-center gap-4 my-1">
                  <span class="text-xs">{{ index + 1 }}</span>
                  <div
                    class="text-xs px-2 py-1 bg-gray-400/10 font-medium rounded-md"
                  >
                    {{ instruction }}
                  </div>
                </div>
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
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
  where,
} from "firebase/firestore";
import {
  getStorage,
  ref as storageRef,
  deleteObject,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
export default {
  components: {
    Loading,
    Icon,
  },
  setup() {
    const loading = ref(true);
    const isSaveloading = ref(false);

    const auth = getAuth();
    const user = ref(auth.currentUser);
    const firestore = getFirestore();
    const { uid } = user.value;
    const userId = uid;

    const recipe = ref([]);
    const selectedRecipe = ref({});

    const recipeCollection = collection(firestore, "recipe");
    const recipeQuery = query(
      recipeCollection,
      orderBy("createdAt", "asc"),
      where("userId", "==", userId)
    );
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
      console.log(selectedRecipe.value);
      const modal = document.getElementById("my_modal_edit");
      modal.showModal();
    };
    const deleteRecipe = async () => {
      try {
        isSaveloading.value = true;
        // Ensure the recipe ID is available
        if (!editId.value) {
          console.error("No recipe selected for deletion.");
          return;
        }

        // Get the reference to the specific recipe document
        const recipeRef = doc(firestore, "recipe", editId.value);
        const recipeDoc = await getDoc(recipeRef);
        const recipeData = recipeDoc.data();

        // Delete the document from Firestore
        await deleteDoc(recipeRef);

        // If the recipe has an associated image, delete it from Firebase Storage
        if (recipeData && recipeData.imageURL) {
          const storage = getStorage();
          const imageRef = storageRef(storage, recipeData.imageURL);
          await deleteObject(imageRef);
        }

        // Close the modal after deleting
        const modal = document.getElementById("my_modal_delete");
        modal.close();

        console.log(
          "Recipe and associated image deleted successfully:",
          editId.value
        );
      } catch (error) {
        console.error("Error deleting recipe and associated image:", error);
        const modal = document.getElementById("my_modal_delete");
        modal.close();
        isSaveloading.value = false;
      } finally {
        isSaveloading.value = false;
      }
    };

    const uploadImageToStorage = async (file, userId) => {
      const storage = getStorage();
      const fileRef = storageRef(storage, `images/${userId}/${file.name}`);
      await uploadBytes(fileRef, file);
      return await getDownloadURL(fileRef);
    };

    const saveEditRecipe = async () => {
      try {
        isSaveloading.value = true;

        let newImageURL = null;
        if (imageFile.value) {
          newImageURL = await uploadImageToStorage(imageFile.value, userId);
        }

        // Get the reference to the specific recipe document
        const recipeRef = doc(firestore, "recipe", editId.value);

        const oldRecipeDoc = await getDoc(recipeRef);
        const oldRecipeData = oldRecipeDoc.data();
        // Update the document with new data
        await updateDoc(recipeRef, {
          ...selectedRecipe.value,
          imageURL: newImageURL || oldRecipeData.imageURL,
        });

        closeModal("my_modal_edit");

        console.log("Recipe updated successfully:", editId.value);
      } catch (error) {
        console.error("Error updating recipe:", error);
        const modal = document.getElementById("my_modal_edit");
        modal.close();
      } finally {
        isSaveloading.value = false;
      }
    };

    const editAddIngredient = ref("");
    const editAddInstruction = ref("");
    const addIngredient = () => {
      selectedRecipe.value.allIngredients.push(editAddIngredient.value);
      console.log(selectedRecipe.value.allIngredients);
      editAddIngredient.value = "";
    };
    const removeIngredient = (index) => {
      selectedRecipe.value.allIngredients.splice(index, 1);
      console.log(selectedRecipe.value.allIngredients);
    };
    const addInstruction = () => {
      selectedRecipe.value.allInstructions.push(editAddInstruction.value);
      console.log(selectedRecipe.value.allInstructions);
      editAddInstruction.value = "";
    };
    const removeInstruction = (index) => {
      selectedRecipe.value.allInstructions.splice(index, 1);
      console.log(selectedRecipe.value.allInstructions);
    };

    const imageFile = ref(null);
    const imageName = ref("");
    const imageURL = ref(null);

    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        imageFile.value = file;
        imageURL.value = URL.createObjectURL(file);
        imageName.value = file.name;
      }
      selectedRecipe.value.imageURL = imageFile.value;
      console.log(file);
    };
    // Ensure to clear the image file and URL when the modal is closed
    const clearImageSelection = () => {
      imageFile.value = null;
      imageURL.value = null;
      imageName.value = "";
      selectedRecipe.value.imageURL = null;
    };

    // Call clearImageSelection when the edit modal is closed
    const closeModal = (modalId) => {
      const modal = document.getElementById(modalId);
      modal.close();
      clearImageSelection();
    };

    onUnmounted(() => {
      unsubscribe();
    });

    // console.log(recipe);
    return {
      loading,
      isSaveloading,
      recipe,
      formatHour,
      editShowRecipe,
      deleteShowRecipe,
      showRecipeModal,
      selectedRecipe,
      editRecipe,
      deleteRecipe,
      saveEditRecipe,
      removeIngredient,
      addIngredient,
      editAddInstruction,
      editAddIngredient,
      removeInstruction,
      addInstruction,
      handleImageUpload,
      imageName,
      imageURL,
      clearImageSelection,
    };
  },
};
</script>
