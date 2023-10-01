import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCyRdMnkAMD4utpicKfoqmgqxEQGMeNl8E",
  authDomain: "upload-image-22210.firebaseapp.com",
  projectId: "upload-image-22210",
  storageBucket: "upload-image-22210.appspot.com",
  messagingSenderId: "869288038478",
  appId: "1:869288038478:web:7a6c600665b1586562331f",
  measurementId: "G-FX6QP544G1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);