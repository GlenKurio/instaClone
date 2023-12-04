import { doc, getDoc } from "firebase/firestore";
import { auth, firestore } from "../Firebase/firebase";
import useShowToast from "./useShowToast";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import useAuthStore from "../store/authStore";

function useLogin() {
  const showToast = useShowToast();
  const [signInWithEmailAndPassword, , loading, error] =
    useSignInWithEmailAndPassword(auth);

  const loginUser = useAuthStore((state) => state.login);

  async function login(inputs) {
    if (!inputs.email || !inputs.password) {
      return showToast("Error", "Fill up the form", "error");
    }
    try {
      const userCred = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );

      if (userCred) {
        const docRef = doc(firestore, "users", userCred.user.uid);
        const docSnap = await getDoc(docRef);
        localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
        loginUser(docSnap.data());
      }

      if (!userCred) {
        return showToast("Error", "Check the email and password", "error");
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  }

  return { login, loading, error };
}

export default useLogin;
