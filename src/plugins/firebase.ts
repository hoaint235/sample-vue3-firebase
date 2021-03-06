// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, browserLocalPersistence, browserPopupRedirectResolver, User, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import { initializeFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIgpCed1TKjJPu_nKLcqp5jj9qz5XL-lE",
  authDomain: "vue-firebase-453b8.firebaseapp.com",
  projectId: "vue-firebase-453b8",
  storageBucket: "vue-firebase-453b8.appspot.com",
  messagingSenderId: "601647863206",
  appId: "1:601647863206:web:f02fca29df7db4dfdc2b67",
  measurementId: "G-6L8P9S6KZN"
};

console.log('[Firebase] Initializing...')
// Initialize Firebase

const initFirebase = () => initializeApp(firebaseConfig);

initFirebase(); 

const app = initFirebase();
const fireStore = initializeFirestore(app, {});
const auth = initializeAuth(app, {
  persistence: browserLocalPersistence,
  popupRedirectResolver: browserPopupRedirectResolver,
});
const analytics = getAnalytics(app);

console.log('[Firebase] Initialized');

export {
  firebaseConfig as config,
  app,
  auth,
  fireStore,
  analytics,
}