
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
        apiKey: "AIzaSyCATAmGRWJSR0zG6Wni7zLBBjkgB-x-Awg",
        authDomain: "emargement-846c5.firebaseapp.com",
        projectId: "emargement-846c5",
        storageBucket: "emargement-846c5.appspot.com",
        messagingSenderId: "738017878007",
        appId: "1:738017878007:web:61e2a21b569890522dd8f2",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export { db, auth };