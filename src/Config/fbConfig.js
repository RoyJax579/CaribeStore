import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyAHmmHLmvuYCwlT-X80fBcOc159ZWPyNls",
    authDomain: "caribestore-ad9ee.firebaseapp.com",
    databaseURL: "https://caribestore-ad9ee.firebaseio.com",
    projectId: "caribestore-ad9ee",
    storageBucket: "caribestore-ad9ee.appspot.com",
    messagingSenderId: "697192470167",
    appId: "1:697192470167:web:d6d1e010e3ed1390f27bd2",
    measurementId: "G-JWZ0J7CDRH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db, auth}