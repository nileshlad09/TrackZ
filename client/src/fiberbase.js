import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBlKS1ioP49FCaPtHfgzcyv891EGrXj-H8",
  authDomain: "trackz-f1c92.firebaseapp.com",
  projectId: "trackz-f1c92",
  storageBucket: "trackz-f1c92.appspot.com",
  messagingSenderId: "517594715171",
  appId: "1:517594715171:web:4af334140c0c7c362dcd96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;