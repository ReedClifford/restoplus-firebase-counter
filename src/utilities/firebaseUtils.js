import { initializeApp } from "firebase/app";
import {
  doc,
  getDoc,
  getFirestore,
  increment,
  setDoc,
  updateDoc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "restoplus-counter-2ef83.firebaseapp.com",
  projectId: "restoplus-counter-2ef83",
  storageBucket: "restoplus-counter-2ef83.appspot.com",
  messagingSenderId: "229661201723",
  appId: "1:229661201723:web:6d271d587985493c0c531e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize FireStore
export const db = getFirestore();

//Add a New Collection to FireStore
const docRef = doc(db, "counter", "count");

export const addIt = async () => {
  await setDoc(docRef, {
    currentCount: 0,
  });
  console.log("done");
};

//RETRIEVE a DOCUMENT FROM FIRESTORE
export const getCurrentCountData = async () => {
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const incrementValue = async () => {
  return await updateDoc(docRef, {
    currentCount: increment(1),
  });
};

export const decrementValue = async () => {
  return await updateDoc(docRef, {
    currentCount: increment(-1),
  });
};

export const resetValue = async () => {
  return await updateDoc(docRef, {
    currentCount: 0,
  });
};
