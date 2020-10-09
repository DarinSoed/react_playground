import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBpTjkZmBjTKQvHIP9-t-ZNCJPOxz3MOoI",
    authDomain: "exercise-tracker-aaded.firebaseapp.com",
    databaseURL: "https://exercise-tracker-aaded.firebaseio.com",
    projectId: "exercise-tracker-aaded",
    storageBucket: "exercise-tracker-aaded.appspot.com",
    messagingSenderId: "762356901672",
    appId: "1:762356901672:web:9cf73cf048129d71e3921d"
});

const db = firebaseApp.firestore();

export { db };