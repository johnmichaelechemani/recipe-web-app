<template>
  <div class="m-5">
    <h1 class="font-semibold">First Task</h1>
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th v-for="(value, key) in recipe[0]" :key="key">
              {{ key }}
            </th>
            <th colspan="2">Action</th>
          </tr>
        </thead>

        <tbody v-for="item in recipe" :key="item.id">
          <!-- row 1 -->

          <tr class="bg-base-200">
            <td>{{ item.id }}</td>
            <td>{{ item.Name }}</td>
            <td>{{ item.Address }}</td>
            <td>{{ item.Number }}</td>
            <td>
              <button
                class="btn bg-green-500"
                @click.stop="editShowRecipe(item.id, item)"
              >
                Edit
              </button>
            </td>
            <td>
              <button
                class="btn bg-red-500"
                @click.stop="deleteShowRecipe(item.id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <h1>Add fields</h1>
      <form action="" @submit.prevent="post">
        <div>
          <p>Name:</p>
          <input
            v-model="name"
            required
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <p>Address:</p>
          <input
            required
            v-model="address"
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <p>Contact Number:</p>
          <input
            v-model="cont"
            required
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <button class="btn btn-secondary my-2" type="submit">Add</button>
      </form>
    </div>
    <!-- modal -->
    <dialog id="my_modal_1" class="modal">
      <div class="modal-box">
        <h3 class="text-lg font-bold">Edit</h3>
        <p>Edit your data.</p>
        <div>
          <p>Name:</p>
          <input
            v-model="selectedRecipe.Name"
            required
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Address:</p>
          <input
            required
            v-model="selectedRecipe.Address"
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Contact Number:</p>
          <input
            v-model="selectedRecipe.Number"
            required
            type="number"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </div>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn bg-green-500 mx-3" @click.stop="saveEditRecipe">
              Save
            </button>
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
    <dialog id="my_modal_2" class="modal">
      <div class="modal-box">
        <h3 class="text-lg font-bold">Delete</h3>
        <p>Are you sure?</p>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn bg-red-500 mx-3" @click.stop="deleteRecipe">
              delete
            </button>
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
    <!--  -->
    <div>
      <h1 class="font-semibold">Second Task</h1>
    </div>
    <div>
      <h1>Add column</h1>
      <form action="" @submit.prevent="addColumn">
        <div>
          <p>Name:</p>
          <input
            v-model="colName"
            required
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
        </div>

        <button class="btn btn-secondary my-2" type="submit">Add Column</button>
      </form>
    </div>
  </div>
</template>
<script setup>
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  getFirestore,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
  where,
} from "firebase/firestore";
import { ref, watch, onUnmounted } from "vue";

const firestore = getFirestore();

const recipe = ref([]);
const name = ref("");
const address = ref("");
const cont = ref("");

const recipeCollection = collection(firestore, "crud");
const recipeQuery = query(recipeCollection);
const unsubscribe = onSnapshot(recipeQuery, (snapshot) => {
  recipe.value = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  console.log(recipe.value);
});
const post = async () => {
  const recipeData = {
    Name: name.value,
    Address: address.value,
    Number: cont.value,
  };

  try {
    await addDoc(recipeCollection, recipeData);
    name.value = "";
    address.value = "";
    cont.value = "";

    console.log("success!");
  } catch (error) {
    console.error("Error sending: ", error);
  }
};
let editId = ref("");
const selectedRecipe = ref({});
const deleteShowRecipe = (id) => {
  const modal = document.getElementById("my_modal_2");
  modal.showModal();
  editId.value = id;
};
const editShowRecipe = (id, item) => {
  selectedRecipe.value = item;
  editId.value = id;
  const modal = document.getElementById("my_modal_1");
  modal.showModal();
};

const deleteRecipe = async () => {
  const modal = document.getElementById("my_modal_2");

  try {
    // Get the reference to the specific recipe document
    const recipeRef = doc(firestore, "crud", editId.value);

    // Delete the document from Firestore
    await deleteDoc(recipeRef);

    console.log("Document successfully deleted!");

    // Close the modal after successful deletion
    modal.close();
  } catch (error) {
    console.error("Error deleting document: ", error);
    // Close the modal even in case of an error
    modal.close();
  }
};
const saveEditRecipe = async () => {
  try {
    // Get the reference to the specific recipe document
    const recipeRef = doc(firestore, "crud", editId.value);

    // Update the document with new data
    await updateDoc(recipeRef, {
      Name: selectedRecipe.value.Name,
      Address: selectedRecipe.value.Address,
      Number: selectedRecipe.value.Number,
    });

    const modal = document.getElementById("my_modal_1");
    modal.close();
  } catch (error) {
    const modal = document.getElementById("my_modal_1");
    modal.close();
  }
};
const colName = ref(""); // Model for the new column name
const newField = {};
const addColumn = async () => {
  try {
    // Loop through all documents and add the new field
    for (let item of recipe.value) {
      const recipeRef = doc(firestore, "crud", item.id);

      // Add a new field (column) to the document with default empty value

      newField[colName.value] = ""; // Set the new field to an empty value initially

      await updateDoc(recipeRef, newField);
    }

    console.log("New column added successfully!");

    // Reset the input field
    colName.value = "";
  } catch (error) {
    console.error("Error adding new column: ", error);
  }
};

onUnmounted(() => {
  unsubscribe();
});
</script>
