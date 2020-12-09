import firebase from 'firebase'

const firebaseConfig = {
    // config for firebase API
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyDA4OhJ6jXh7cjO1l41sYgjeNOXunqm8R0",
    authDomain: "crack-code.firebaseapp.com",
    projectId: "crack-code",
    storageBucket: "crack-code.appspot.com",
    messagingSenderId: "145695552335",
    appId: "1:145695552335:web:f578fbb1fb9871ac8dcb3a",
    measurementId: "G-JJQ7H33ETK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore();

export { auth, provider }
export default db