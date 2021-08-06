import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDnayU4YERRAWpOACnmTfx7QsDqrAjY-UE",
  authDomain: "comit-react-2021.firebaseapp.com",
  projectId: "comit-react-2021",
  storageBucket: "comit-react-2021.appspot.com",
  messagingSenderId: "1097744294306",
  appId: "1:1097744294306:web:f1089828f79823ea9512fb",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

export function createUserAccount(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function loginToAccount(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export function getToken() {
  return auth.currentUser.getIdToken(true);
}

export function logout() {
  return auth.signOut();
}
