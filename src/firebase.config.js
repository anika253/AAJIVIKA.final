import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDewC3HgmZVVe6aduDuYp628n-AXxxx2Jw",
  authDomain: "worker-booth-ce85b.firebaseapp.com",
  projectId: "worker-booth-ce85b",
  storageBucket: "worker-booth-ce85b.appspot.com",
  messagingSenderId: "669020240356",
  appId: "1:669020240356:web:7e025ea1bb83078d9caff1"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;