// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH65rR81dwBaARVFsE4QfWne8wc6J8nf4",
  authDomain: "workout-wizard-815f7.firebaseapp.com",
  databaseURL: "https://workout-wizard-815f7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "workout-wizard-815f7",
  storageBucket: "workout-wizard-815f7.appspot.com",
  messagingSenderId: "608592776022",
  appId: "1:608592776022:web:1296c17ee5350f3a81e4f7",
  measurementId: "G-HL2DMCZYR9"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);


export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyDH65rR81dwBaARVFsE4QfWne8wc6J8nf4",
    authDomain: "workout-wizard-815f7.firebaseapp.com",
    databaseURL: "https://workout-wizard-815f7-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "workout-wizard-815f7",
    storageBucket: "workout-wizard-815f7.appspot.com",
    messagingSenderId: "608592776022",
    appId: "1:608592776022:web:1296c17ee5350f3a81e4f7",
    measurementId: "G-HL2DMCZYR9"
  }

};

