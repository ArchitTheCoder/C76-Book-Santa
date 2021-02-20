import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyArhjiHoV29ZyqCKPqSWSpHiBFscJUIcDM",
  authDomain: "book-7dad1.firebaseapp.com",
  projectId: "book-7dad1",
  storageBucket: "book-7dad1.appspot.com",
  messagingSenderId: "390316891762",
  appId: "1:390316891762:web:c9759eff2cbe9b1ddbeceb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db