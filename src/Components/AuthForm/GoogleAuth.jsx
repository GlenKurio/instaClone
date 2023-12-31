import { Flex, Image, Text } from "@chakra-ui/react";
import { auth, firestore } from "../../Firebase/firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import useShowToast from "../../hooks/useShowToast";
import useAuthStore from "../../store/authStore";
import { doc, getDoc, setDoc } from "firebase/firestore";

function GoogleAuth({ prefix }) {
  const [signInWithGoogle, , , error] = useSignInWithGoogle(auth);
  const showToast = useShowToast();
  const loggedinUser = useAuthStore((state) => state.login);

  async function handleGoogleAuth() {
    try {
      const newUser = await signInWithGoogle();

      if (!newUser && error) {
        showToast("Error", "Something went wrong. Try again", "error");
      }
      const userRef = doc(firestore, "users", newUser.user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists) {
        // Login
        const userDoc = userSnap.data();
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loggedinUser(userDoc);
      } else {
        // Signup
        const userDoc = {
          uid: newUser.user.uid,
          email: newUser.user.email,
          username: newUser.user.email.split("@")[0],
          fullName: newUser.user.displayName,
          bio: "",
          profilePicURL: newUser.user.photoURL,
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loggedinUser(userDoc);
      }
    } catch (e) {
      showToast("Error", e.message, "error");
    }
  }
  return (
    <>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        cursor={"pointer"}
        onClick={handleGoogleAuth}
      >
        <Image src="/google.png" w={5} alt="Google Logo" />
        <Text mx={2} color={"blue.500"}>
          {prefix} with Google
        </Text>
      </Flex>
    </>
  );
}

export default GoogleAuth;
