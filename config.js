import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAoHOym2cBzb_cxwqpCkuQr4kRLnumH_-8",
  authDomain: "e-ride-241df.firebaseapp.com",
  projectId: "e-ride-241df",
  storageBucket: "e-ride-241df.appspot.com",
  messagingSenderId: "385926053702",
  appId: "1:385926053702:web:9335c24bf61831072caf47"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
