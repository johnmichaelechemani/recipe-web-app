import {
  getFirestore,
  collection,
  doc,
  setDoc,
  updateDoc,
  query,
  orderBy,
  getDoc,
  where,
  onSnapshot,
} from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

import { useRouter } from "vue-router";
import { ref, onUnmounted, computed } from "vue";

export function useAuth() {
  const auth = getAuth();
  const user = ref(auth.currentUser);

  auth.onAuthStateChanged((authUser) => {
    user.value = authUser;
  });

  const firestore = getFirestore();
  const router = useRouter();
  const errorMessage = ref("Error in penetrating the application!");
  const isError = ref(false);
  const authGoogle = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, authGoogle)
      .then((res) => {
        const usersCollection = collection(firestore, "users");
        const userDocRef = doc(usersCollection, res.user.uid);
        setDoc(userDocRef, {
          userName: res.user.displayName,
          userId: res.user.uid,
          userPhotoURL: res.user.photoURL,
          status: "online",
        });

        router.push("/home");
      })
      .catch(() => {
        isError.value = true;
        errorMessage.value = "Error in penetrating the application!";

        setTimeout(() => {
          errorMessage.value = "";
          isError.value = false;
        }, 3000);
      });
  };

  const logout = async () => {
    if (user.value) {
      const userDocRef = doc(firestore, "users", user.value.uid);

      try {
        await updateDoc(userDocRef, {
          status: "offline",
        });

        await signOut(auth);

        router.push("/");
      } catch (error) {
        console.error("Error during logout: ", error);
      }
    } else {
      router.push({
        path: "/",
        state: { errorMessage: "You must login first" },
      });
    }
  };

  return {
    user,
    signInWithGoogle,
    errorMessage,
    isError,
    firestore,
    auth,
    logout,
    collection,
    query,
    where,
    onSnapshot,
  };
}

export function getAllRecipe(props) {
  const auth = getAuth();
  const firestore = getFirestore();
  const sendingRatingLoading = ref(false);
  const loading = ref(true);
  const user = ref(auth.currentUser);

  auth.onAuthStateChanged((authUser) => {
    user.value = authUser;
  });

  const recipe = ref([]);

  const filteredRecipes = computed(() => {
    return recipe.value.filter((recipe) =>
      recipe.title.toLowerCase().includes(props.searchQuery.toLowerCase())
    );
  });

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
    const milliseconds = timestamp.nanoseconds / 1e6;
    return new Date(seconds * 1000 + milliseconds);
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

  let muteRateBnt = ref(false);
  const showRecipeAllModal = (item) => {
    selectedAllRecipe.value = item;
    // console.log(selectedAllRecipe.value);
    muteRateBnt.value = hasUserRated(user.value?.uid);
    const modal = document.getElementById("my_modal_4");
    modal.showModal();
  };
  const instructionsDisables = ref([]);
  const ingredientsDisables = ref([]);
  const closeModal = () => {
    ratings.value = 0;
    instructionsDisables.value = [];
    ingredientsDisables.value = [];
    const modal = document.getElementById("my_modal_4");
    modal.close();
  };

  const clickInstructions = (index) => {
    // console.log("instructions clicked", index);

    if (!instructionsDisables.value.includes(index)) {
      instructionsDisables.value.push(index);
    } else {
      const idx = instructionsDisables.value.indexOf(index);
      if (idx !== -1) {
        instructionsDisables.value.splice(idx, 1);
      }
    }

    // console.log(instructionsDisables.value);
  };
  const clickIngredients = (index) => {

    if (!ingredientsDisables.value.includes(index)) {
      ingredientsDisables.value.push(index);
    } else {
      const idx = ingredientsDisables.value.indexOf(index);
      if (idx !== -1) {
        ingredientsDisables.value.splice(idx, 1);
      }
    }

    //  console.log(ingredientsDisables.value);
  };

  let recipeId = ref("");
  const setRating = (star, id) => {
    recipeId.value = id;
    ratings.value = star;
  };

  const updateRecipeRatings = async (recipeId, newRating, id) => {
    try {
      sendingRatingLoading.value = true;
      const recipeDocRef = doc(firestore, "recipe", recipeId);
      const recipeDoc = await getDoc(recipeDocRef);

      if (recipeDoc.exists()) {
        const recipeData = recipeDoc.data();

        const currentTotalRatings = recipeData.totalRatings || 0;
        const currentRatingCount = recipeData.ratingCount || 0;

        const updatedTotalRatings = currentTotalRatings + newRating;
        const updatedRatingCount = currentRatingCount + 1;
        const updatedAverageRating = updatedTotalRatings / updatedRatingCount;
        const usersIdThatRate = recipeData.usersIdThatRate || [];
        usersIdThatRate.push(id);

        await updateDoc(recipeDocRef, {
          totalRatings: updatedTotalRatings,
          ratingCount: updatedRatingCount,
          averageRating: updatedAverageRating,
          usersIdThatRate: usersIdThatRate,
        });
      } else {
      }
    } catch (error) {
      console.error("Error updating ratings: ", error);
    } finally {
      sendingRatingLoading.value = false;
    }
  };

  const sendRatings = async () => {
    if (user.value) {
      const newRating = ratings.value;
      const recipeIds = recipeId.value;
      const id = user.value.uid;

      await updateRecipeRatings(recipeIds, newRating, id);
      closeModal();
    }
  };

  const hasUserRated = (id) => {
    const usersIdThatRate = selectedAllRecipe.value.usersIdThatRate || [];
    return usersIdThatRate.includes(id);
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
    sendingRatingLoading,
    recipe,
    formatHour,
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
    loading,
    clickInstructions,
    instructionsDisables,
    clickIngredients,
    ingredientsDisables,
  };
}
