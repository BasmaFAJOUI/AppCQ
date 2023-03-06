import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig={
  apiKey: "AIzaSyADHdIGZNZ9m4Gyr20HtV2GIJGE7tpc2o0",
  authDomain: "appcq-43bf0.firebaseapp.com",
  projectId: "appcq-43bf0",
  storageBucket: "appcq-43bf0.appspot.com",
  messagingSenderId: "80355512157",
  appId: "1:80355512157:web:8dc414a266bcee2affe2b4",
  measurementId: "G-17GYC47J3E"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
export{ firebase};