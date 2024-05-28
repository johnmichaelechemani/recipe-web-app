<template>
  <button
    class="btn mt-5 btn-primary rounded-full"
    onclick="my_modal_3.showModal()"
  >
    <Icon icon="ci:add-plus" class="text-2xl" />Add Recipes
  </button>

  <div class="grid place-items-center">
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
            <label class="input input-bordered flex items-center gap-2">
              <span class="text-xs sm:text-base">Title:</span>
              <input
                v-model="title"
                required
                type="text"
                class="grow placeholder:text-xs"
                placeholder="Adobo"
              />
            </label>
            <label class="input input-bordered flex items-center gap-2">
              <span class="text-xs sm:text-base">Descriptions:</span>
              <input
                v-model="descriptions"
                required
                type="text"
                class="grow placeholder:text-xs"
                placeholder="A classic..."
              />
            </label>
            <label class="input input-bordered pr-0 flex items-center gap-2">
              <span class="text-xs sm:text-base">Ingredients:</span>
              <input
                v-model="ingredients"
                type="text"
                class="sm:grow w-44 placeholder:text-xs"
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

            <div v-if="allIngredients.length !== 0">
              <div class="grid grid-cols-1 gap-1">
                <div v-for="item in allIngredients" :key="item.id">
                  <div
                    class="flex justify-between items-center px-2 py-1 bg-blue-400/10 border shadow border-gray-500/10 rounded-md"
                  >
                    <span class="text-sm font-medium">{{ item }}</span>
                    <button class="" @click.prevent="removeIngredients(item)">
                      <Icon icon="carbon:close" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <label class="input input-bordered pr-0 flex items-center gap-2">
              <span class="text-xs sm:text-base">Instructions:</span>
              <input
                type="text"
                v-model="instructions"
                class="sm:grow w-44 placeholder:text-xs"
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

            <div v-if="allInstructions.length !== 0">
              <div class="grid grid-cols-1 gap-1">
                <div v-for="item in allInstructions" :key="item.id">
                  <div
                    class="flex justify-between items-center px-2 py-1 bg-blue-400/10 border shadow border-gray-500/10 rounded-md"
                  >
                    <span class="text-sm font-medium">{{ item }}</span>
                    <button class="" @click.prevent="removeIstructions(item)">
                      <Icon icon="carbon:close" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p class="text-sm font-semibold">Add Image:</p>
              <input
                type="file"
                accept="image/*"
                class="file-input file-input-bordered w-full"
              />
            </div>
            <button class="btn mt-5 w-full btn-primary" type="submit">
              Post Recipe
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

    const auth = getAuth();
    const user = ref(auth.currentUser);

    console.log(user.uid);

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
    const post = () => {
      console.log(title.value);
      console.log(allIngredients.value);
      console.log(allInstructions.value);
      console.log(descriptions.value);
      title.value = "";
      descriptions.value = "";
      allIngredients.value = "";
      allInstructions.value = "";
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
    };
  },
};
</script>
