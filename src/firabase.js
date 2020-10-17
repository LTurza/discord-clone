import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD-ZvbVdNgY0mlKzBOchcQMWDoHMBXSWmw",
    authDomain: "discord-clone-eb374.firebaseapp.com",
    databaseURL: "https://discord-clone-eb374.firebaseio.com",
    projectId: "discord-clone-eb374",
    storageBucket: "discord-clone-eb374.appspot.com",
    messagingSenderId: "737880703086",
    appId: "1:737880703086:web:8ed81c5d09e1d5d69d267f",
    measurementId: "G-V6L74CP1M5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;