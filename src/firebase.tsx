import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import firebaseConfig from '../firebase.config.ts';

const config = firebaseConfig

// Initialize Firebase
const app = initializeApp(config);
// Reference database
export const db = getFirestore(app);