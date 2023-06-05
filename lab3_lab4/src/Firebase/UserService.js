import { auth } from "./Init";
import { useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const loginWithGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, googleProvider);
    const user = {
      email: response.user.email,
      displayName: response.user.displayName,
    };
    return user;
  } catch (err) {
    console.error({ err });
    alert(err.message);
  }
};

export const loginWithGithub = async () => {
  try {
    const response = await signInWithPopup(auth, githubProvider);
    const user = {
      email: response.user.email,
      displayName: response.user.displayName,
    };
    return user;
  } catch (err) {
    console.error({ err });
    alert(err.message);
  }
};

export const loginInWithEmail = async (email, password) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  const user = {
    email: response.user.email,
    displayName: response.user.displayName,
  };
  return user;
};

export const registerWithEmail = async (email, username, password) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  return updateProfile(auth.currentUser, {
    displayName: username,
  });
};

export const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
    });

    return () => unsubscribe();
  }, []);

  return user;
};

export const logoutAuth = () => {
  signOut(auth);
};
