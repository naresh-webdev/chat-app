import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBK9nYIg-Eu4tw1tdh86KutSOzyZyjLoQs",
  authDomain: "chat-app-6062b.firebaseapp.com",
  projectId: "chat-app-6062b",
  storageBucket: "chat-app-6062b.appspot.com",
  messagingSenderId: "952385523790",
  appId: "1:952385523790:web:d703f4ec86fd321147331f",
  measurementId: "G-KZCRTXXKB6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
