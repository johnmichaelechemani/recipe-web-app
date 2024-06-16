import { getAuth } from "firebase/auth";
import { ref } from "vue";
export function getUsers() {
  const auth = getAuth();
  const user = ref(auth.currentUser);
  const { uid, photoURL, displayName } = user.value;
  const userId = uid;

  const storedUsers = ref([]);
  const users = JSON.parse(localStorage.getItem("users"));

  const filteredUsers = users.filter((storedUser) => storedUser.id !== userId);
  storedUsers.value = filteredUsers;
  //   console.log(storedUsers);
  //   console.log(userId);
  return {
    storedUsers,
  };
}
