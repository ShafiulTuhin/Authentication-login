// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3L7GXf0UfcSDHEqDR44QFDA3IhIKD1mU",
  authDomain: "friendsbook-9dfdd.firebaseapp.com",
  projectId: "friendsbook-9dfdd",
  storageBucket: "friendsbook-9dfdd.firebasestorage.app",
  messagingSenderId: "29514310705",
  appId: "1:29514310705:web:702785babaf326d27ca110",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleAuthProvider = new GoogleAuthProvider();

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = response.user;
    return user;
  } catch (error) {
    throw error;
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    throw error;
  }
};

const passwordResetEmail = async (email, password) => {
  try {
    const response = await sendPasswordResetEmail(auth, email, password);
    return response;
  } catch (error) {
    throw error;
  }
};

const signInWithGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, googleAuthProvider);
    const user = response.user;
    return user;
  } catch (error) {
    throw error;
  }
};

export {
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  auth,
  passwordResetEmail,
  signInWithGoogle,
};
