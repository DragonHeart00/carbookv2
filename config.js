import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxekVZESj3TMjvSvHGrwiPhvU2s-UbP_s",
  authDomain: "autoservice-fb74d.firebaseapp.com",
  projectId: "autoservice-fb74d",
  storageBucket: "autoservice-fb74d.appspot.com",
  messagingSenderId: "618670213485",
  appId: "1:618670213485:web:a2e2ff08a2fbe2dae73264",
  measurementId: "G-BRGK4YWFXE"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
