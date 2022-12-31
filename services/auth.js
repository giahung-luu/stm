import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../lib/firebase";

export const signUp = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return `This is ${errorCode}: ${errorMessage}`;
    });

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user?.accessToken) {
        localStorage.setItem("aToken", user.accessToken);
        return true;
      }
      // return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return `This is ${errorCode}: ${errorMessage}`;
    });
};

export const getAuthState = () =>
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      return uid;
    } else {
      return "hello";
    }
  });
// export const signOut = (callback) => {
//   signOut(auth)
//     .then(() => {
//       callback();
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
