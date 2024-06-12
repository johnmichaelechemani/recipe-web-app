import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { useRouter } from "vue-router";

const auth = getAuth();
const firestore = getFirestore();

export function useAuth() {
  const router = useRouter();
  const user = auth.currentUser;

  //---------------------
  const authgoogle = new GoogleAuthProvider();
  //----------------------
  const signInWithGoogle = () => {
    signInWithPopup(auth, authgoogle)
      .then((res) => {
        const usersCollection = collection(firestore, "recipeUsers");
        const userDocRef = doc(usersCollection, res.user.uid);
        setDoc(userDocRef, {
          userName: res.user.displayName,
          userId: res.user.uid,
          userPhotoURL: res.user.photoURL,
          status: "online",
        });
        router.push("/home");
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  return {
    user,
    signInWithGoogle,
  };
}
