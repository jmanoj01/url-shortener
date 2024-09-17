import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyBZfY28iygyQFnfHm_BFbxzQoFA9xqnNq4",
    authDomain: "url-shortener-justinmanoj.firebaseapp.com",
    projectId: "url-shortener-justinmanoj",
    storageBucket: "url-shortener-justinmanoj.appspot.com",
    messagingSenderId: "1085131369996",
    appId: "1:1085131369996:web:73d4ec3e87f15956798829",
    measurementId: "G-5Q95GRXY5E"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;