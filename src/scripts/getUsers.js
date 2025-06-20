import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { ref, onMounted } from "vue";

export function getUsers() {
  const auth = getAuth();
  const firestore = getFirestore();

  const user = ref(auth.currentUser);
  const storedUsers = ref([]);
  const { userId } = user.value;
  const fetchAndStoreUsers = async () => {
    if (!user.value) return;

    try {
      const usersCollection = collection(firestore, "users");
      const querySnapshot = await getDocs(usersCollection);

      const users = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      localStorage.setItem("users", JSON.stringify(users));

      console.log("Stored Users:", storedUsers.value);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  onMounted(() => {
    fetchAndStoreUsers();
  });

  const stored = JSON.parse(localStorage.getItem("users"));
  const filteredUsers = stored.filter((storedUser) => storedUser.id !== userId);
  storedUsers.value = filteredUsers;

  return {
    storedUsers,
  };
}
