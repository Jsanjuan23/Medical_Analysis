import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBh8eOllastQuWW4nApQLzECQp_eenuCuE",
    authDomain: "medical-8fad8.firebaseapp.com",
    projectId: "medical-8fad8",
    storageBucket: "medical-8fad8.appspot.com",
    messagingSenderId: "916198719129",
    appId: "1:916198719129:web:c5da92f44b046d7e160208"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export{firebase}

  
