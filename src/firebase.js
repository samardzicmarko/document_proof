import firebase from "firebase";
import "firebase/firestore";

let app = null;

const firebaseConfig = {
  apiKey: "AIzaSyCgKU18IgK7d8eNFmj1fUeE7fxv2XVNGf8",
  authDomain: "documentproof-32008.firebaseapp.com",
  databaseURL: "https://documentproof-32008.firebaseio.com",
  projectId: "documentproof-32008",
  storageBucket: "documentproof-32008.appspot.com",
  messagingSenderId: "333378908398",
  appId: "1:333378908398:web:5c323faf8e6f8a027c83ff",
};

app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig);

export const db = app.firestore();
