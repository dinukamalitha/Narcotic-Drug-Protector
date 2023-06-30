import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA_OB5fVSwgyzodcC_y-OzWRKYnwEvqIP0",
    authDomain: "hardware-project-b0128.firebaseapp.com",
    projectId: "hardware-project-b0128",
    storageBucket: "hardware-project-b0128.appspot.com",
    messagingSenderId: "521672471388",
    appId: "1:521672471388:web:2c59369b3b184d83f7c799"
  };


firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();

export {projectAuth};