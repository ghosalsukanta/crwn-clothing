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

export const createUserProfileDocument = async (userAuth, additionalData)=>{

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot =await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
       
        try{
          await  userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
          });
          console.log('created user in db');
        }
        catch (error) {
            console.log('error creating user',error.message);
        }
        
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Setting up google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'}); 
export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

