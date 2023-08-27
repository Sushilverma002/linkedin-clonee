import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCsxPz0GMaqGslCqrSC4ATVAAHIkmQRTwY",
    authDomain: "linkedin-clonee-b2d57.firebaseapp.com",
    projectId: "linkedin-clonee-b2d57",
    storageBucket: "linkedin-clonee-b2d57.appspot.com",
    messagingSenderId: "616022292711",
    appId: "1:616022292711:web:6bca746008e19c359a0a42"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();// db store the firestore the was initilized in firbaseApp
  const auth =firebase.auth();//it store/ allow all the authentatication for firebase
  
  export{db,auth};