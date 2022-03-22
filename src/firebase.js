import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAz917rh8yk4qSCxMXre9MhBVwGBgL--mc",
  authDomain: "disneyplus-clone-42e42.firebaseapp.com",
  projectId: "disneyplus-clone-42e42",
  storageBucket: "disneyplus-clone-42e42.appspot.com",
  messagingSenderId: "85008841555",
  appId: "1:85008841555:web:a345f021f2f82413cdffa6",
  measurementId: "G-Q9RWZFNNX1",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage, db };
