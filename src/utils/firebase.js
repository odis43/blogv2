// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  databaseURL: process.env.NEXT_PUBLIC_databaseURL,
};

// Initialize Firebasec
console.log(process.env.NEXT_PUBLIC_apiKey, "API KEY");
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
