import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { ref, onMounted } from "vue";

export function getUsers() {
  const auth = getAuth();
  const firestore = getFirestore();

  const user = ref(auth.currentUser);
  const storedUsers = ref([]);

  const fetchAndStoreUsers = async () => {
    if (!user.value) return;

    const { uid: userId } = user.value;

    try {
      const usersCollection = collection(firestore, "users");
      const querySnapshot = await getDocs(usersCollection);

      const users = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const filteredUsers = users.filter(
        (storedUser) => storedUser.id !== userId
      );

      localStorage.setItem("users", JSON.stringify(users));

      storedUsers.value = filteredUsers;

      console.log("Stored Users:", storedUsers.value);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  onMounted(() => {
    fetchAndStoreUsers();
  });

  return {
    storedUsers,
    fetchAndStoreUsers,
  };
}
