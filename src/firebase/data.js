import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC0czHKxa-NBibQ4z9F6u2h0NkdyP8HDWA",
    authDomain: "theglam-c1aad.firebaseapp.com",
    projectId: "theglam-c1aad",
    storageBucket: "theglam-c1aad.appspot.com",
    messagingSenderId: "339035080814",
    appId: "1:339035080814:web:037010f999c8ec98b03e7f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);