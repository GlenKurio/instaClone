import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBIseEFZTdsj2edlFrAyRnBmh_-Z4ZIfDA",
  authDomain: "instaclone-659b0.firebaseapp.com",
  projectId: "instaclone-659b0",
  storageBucket: "instaclone-659b0.appspot.com",
  messagingSenderId: "655732741306",
  appId: "1:655732741306:web:9a88d95e6e908ccd5d5e83",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
