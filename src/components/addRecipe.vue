<template>
  <button
    class="btn mt-5 btn-primary rounded-full"
    onclick="my_modal_3.showModal()"
  >
    <Icon icon="ci:add-plus" class="text-2xl" />Add Recipes
  </button>

  <div class="">
    <dialog id="my_modal_3" class="modal">
      <div class="modal-box">
        <form method="dialog">
          <button
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <h3 class="font-bold text-lg">Add your recipe.</h3>

        <form @submit.prevent="post">
          <div class="py-3 grid grid-cols-1 gap-2">
            <label class="form-control w-full max-w-xs">
              <div class="label">
                <span class="text-xs sm:text-base">Title:</span>
              </div>
              <input
                type="text"
                required
                v-model="title"
                placeholder="Adobo"
                class="input input-bordered placeholder:text-xs w-full max-w-xs"
              />
            </label>
            <div>
              <span class="text-xs sm:text-base">Descriptions:</span>
              <textarea
                class="textarea textarea-bordered w-full placeholder:text-xs"
                v-model="descriptions"
                required
                placeholder="A classic..."
              ></textarea>
            </div>
            <div>
              <span class="text-xs sm:text-base">Ingredients:</span>
              <label class="input input-bordered pr-0 flex items-center gap-2">
                <input
                  v-model="ingredients"
                  type="text"
                  class="w-full placeholder:text-xs"
                  placeholder="Eggs"
                />
                <button
                  :class="[
                    'btn',
                    !canAddIngredient ? 'btn-disabled' : 'btn-primary ',
                  ]"
                  :disabled="!canAddIngredient"
                  @click.prevent="addIngredients"
                >
                  <Icon icon="ci:add-plus" class="text-2xl" />
                </button>
              </label>
            </div>

            <div v-if="allIngredients.length !== 0">
              <div class="grid grid-cols-1 gap-1">
                <div v-for="(item, index) in allIngredients" :key="item.id">
                  <div
                    class="flex justify-between items-center px-2 py-1 bg-blue-400/10 border shadow border-gray-500/10 rounded-md"
                  >
                    <span class="text-sm font-medium"
                      >{{ index + 1 }}. {{ item }}</span
                    >
                    <button class="" @click.prevent="removeIngredients(item)">
                      <Icon icon="carbon:close" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span class="text-xs sm:text-base">Instructions:</span>
              <label class="input input-bordered pr-0 flex items-center gap-2">
                <input
                  type="text"
                  v-model="instructions"
                  class="w-full placeholder:text-xs"
                  placeholder="Cook spaghetti until..."
                />
                <button
                  :class="[
                    'btn',
                    !canAddIntructions ? 'btn-disabled' : 'btn-primary',
                  ]"
                  :disabled="!canAddIntructions"
                  @click.prevent="addInstructions"
                >
                  <Icon icon="ci:add-plus" class="text-2xl" />
                </button>
              </label>
            </div>

            <div v-if="allInstructions.length !== 0">
              <div class="grid grid-cols-1 gap-1">
                <div v-for="(item, index) in allInstructions" :key="item.id">
                  <div
                    class="flex justify-between items-center px-2 py-1 bg-blue-400/10 border shadow border-gray-500/10 rounded-md"
                  >
                    <span class="text-sm font-medium">
                      {{ index + 1 }}. {{ item }}</span
                    >
                    <button class="" @click.prevent="removeIstructions(item)">
                      <Icon icon="carbon:close" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p class="text-xs font-medium">Add Image:</p>
              <input
                type="file"
                @change="handleImageUpload"
                accept="image/*"
                class="file-input file-input-bordered w-full"
              />
            </div>
            <button
              :class="[
                'btn mt-5 w-full',
                loading ||
                allIngredients.length === 0 ||
                allInstructions.length === 0
                  ? 'btn-disabled'
                  : 'btn-primary ',
              ]"
              type="submit"
            >
              Post Recipe
              <span
                v-if="loading"
                class="loading loading-dots loading-xs"
              ></span>
            </button>
          </div>
        </form>
      </div>
    </dialog>
  </div>
</template>
<script>
import { ref, watch } from "vue";
import { Icon } from "@iconify/vue";
import { getAuth } from "firebase/auth";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

export default {
  components: {
    Icon,
  },
  setup() {
    const title = ref("");
    const descriptions = ref("");
    const ingredients = ref("");
    const allIngredients = ref([]);
    const canAddIngredient = ref(false);
    const instructions = ref("");
    const allInstructions = ref([]);
    const canAddIntructions = ref(false);
    const loading = ref(false);
    const imageFile = ref(null);

    const auth = getAuth();
    const user = ref(auth.currentUser);
    const firestore = getFirestore();
    const storage = getStorage();

    const recipeCollection = collection(firestore, "recipe");

    watch(ingredients, (newVal) => {
      canAddIngredient.value = newVal.trim() !== "";
    });
    watch(instructions, (newVal) => {
      canAddIntructions.value = newVal.trim() !== "";
    });

    const addIngredients = () => {
      allIngredients.value.push(ingredients.value);
      ingredients.value = "";
      console.log(allIngredients.value);
    };
    const addInstructions = () => {
      allInstructions.value.push(instructions.value);
      instructions.value = "";
      console.log(allInstructions.value);
    };

    const removeIstructions = (item) => {
      allInstructions.value.pop(item);
    };

    const removeIngredients = (item) => {
      allIngredients.value.pop(item);
    };

    const handleImageUpload = (event) => {
      imageFile.value = event.target.files[0];
    };

    const post = async () => {
      const { uid, displayName, photoURL } = user.value;
      let imageURL = "";
      const createdAt = new Date();

      if (imageFile.value) {
        const imageRef = storageRef(storage, `images/${imageFile.value.name}`);
        const snapshot = await uploadBytes(imageRef, imageFile.value);
        imageURL = await getDownloadURL(snapshot.ref);
      }
      const totalRatings = 0;
      const recipeData = {
        userId: uid,
        userName: displayName,
        userPhotoURL: photoURL,
        title: title.value,
        descriptions: descriptions.value,
        allIngredients: allIngredients.value,
        allInstructions: allInstructions.value,
        createdAt: createdAt,
        imageURL: imageURL,
        totalRatings: totalRatings,
      };

      try {
        loading.value = true;
        await addDoc(recipeCollection, recipeData);
        title.value = "";
        descriptions.value = "";
        allIngredients.value = "";
        allInstructions.value = "";
        instructions.value = "";
        ingredients.value = "";
        imageFile.value = null;
        const modal = document.getElementById("my_modal_3");
        modal.close();
        console.log("success!");
      } catch (error) {
        console.error("Error sending post recipe:", error);
      } finally {
        loading.value = false;
      }
    };

    return {
      title,
      descriptions,
      post,
      ingredients,
      instructions,
      allInstructions,
      canAddIntructions,
      addIngredients,
      addInstructions,
      allIngredients,
      removeIngredients,
      removeIstructions,
      canAddIngredient,
      loading,
      handleImageUpload,
    };
  },
};
</script>
