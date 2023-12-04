import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/firebase";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";

function useLogout() {
  const [signOut, isLoggingOut, error] = useSignOut(auth);
  const showToast = useShowToast();
  const logoutUser = useAuthStore((state) => state.logout);

  async function handleLogout() {
    try {
      const success = await signOut();
      if (success) {
        showToast("success", "Logged out sucessfully!", "success");
        localStorage.removeItem("user-info");
        logoutUser();
      }
    } catch (e) {
      showToast("error", error.message, "error");
    }
  }

  return { handleLogout, isLoggingOut, error };
}

export default useLogout;
