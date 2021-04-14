// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCNIn0w133STDIyIqEY8GDYW24vELZph9Y",
//   authDomain: "instagram-app-137f4.firebaseapp.com",
//   projectId: "instagram-app-137f4",
//   storageBucket: "instagram-app-137f4.appspot.com",
//   messagingSenderId: "1021899778150",
//   appId: "1:1021899778150:web:e4e06edf4abd8a7a6d25a7",
//   measurementId: "G-V6RWTSDBF3"
// };

import firebase from 'firebase';

const fb = firebase.initializeApp({
  apiKey: "AIzaSyCNIn0w133STDIyIqEY8GDYW24vELZph9Y",
  authDomain: "instagram-app-137f4.firebaseapp.com",
  projectId: "instagram-app-137f4",
  storageBucket: "instagram-app-137f4.appspot.com",
  messagingSenderId: "1021899778150",
  appId: "1:1021899778150:web:e4e06edf4abd8a7a6d25a7",
  measurementId: "G-V6RWTSDBF3"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};