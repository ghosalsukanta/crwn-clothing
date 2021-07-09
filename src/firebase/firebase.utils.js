import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyBO_zUdvLPJuRqSaQgxTBtv_vnK4yivl5o",
    authDomain: "cwrn-db-ee49f.firebaseapp.com",
    projectId: "cwrn-db-ee49f",
    storageBucket: "cwrn-db-ee49f.appspot.com",
    messagingSenderId: "173344805517",
    appId: "1:173344805517:web:f0423b20303ec283dc88c4",
    measurementId: "G-MP2PTN5RNS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Setting up google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'}); 
export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

