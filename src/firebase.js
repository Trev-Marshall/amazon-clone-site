import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyCOAkdvk-BQxHWELYbeeBSfNQqORK-LcmU",
    authDomain: "clone-c9b74.firebaseapp.com",
    projectId: "clone-c9b74",
    storageBucket: "clone-c9b74.appspot.com",
    messagingSenderId: "828266332383",
    appId: "1:828266332383:web:0a3430b82d6c63d5a6a96a"
});

const db = firebase.firestore();
export { db }