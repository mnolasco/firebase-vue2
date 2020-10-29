import firebase from "firebase/app";
import "firebase/firebase-firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCK3IDlORbGDHzd-Ii3uYjm39oYWaLpxq0",
    authDomain: "vue-crud-b40cc.firebaseapp.com",
    databaseURL: "https://vue-crud-b40cc.firebaseio.com",
    projectId: "vue-crud-b40cc",
    storageBucket: "vue-crud-b40cc.appspot.com",
    messagingSenderId: "1031021028231",
    appId: "1:1031021028231:web:368799be29a646d9eae922",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
