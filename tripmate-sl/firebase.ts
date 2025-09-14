import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCU7KKOyGQ7KvWJSxV_KkXzXAjjBElY_KI",
  authDomain: "task-manager-app-8ce5b.firebaseapp.com",
  projectId: "task-manager-app-8ce5b",
  storageBucket: "task-manager-app-8ce5b.firebasestorage.app",
  messagingSenderId: "71440099194",
  appId: "1:71440099194:web:67766f63e4b501ec59d8c3"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)
