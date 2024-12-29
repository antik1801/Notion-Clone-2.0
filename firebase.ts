// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVdBkxBkTQXk6vLo03CkVKyP35FNY3TBo",
  authDomain: "air-cnc-2.firebaseapp.com",
  projectId: "air-cnc-2",
  storageBucket: "air-cnc-2.firebasestorage.app",
  messagingSenderId: "435993823709",
  appId: "1:435993823709:web:0cbd2e30ac7db602aece34"
};

// Initialize Firebase
const app = getApps.length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

export {db};
