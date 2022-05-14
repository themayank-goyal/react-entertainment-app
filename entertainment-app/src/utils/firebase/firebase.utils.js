import { initializeApp } from 'firebase/app';
import { data } from '../../data';

import {getAuth,signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC6ZYDBAcWS3obfzpmEnFqvGRoIRt4faTE',
  authDomain: 'entertainment-app-a8f70.firebaseapp.com',
  projectId: 'entertainment-app-a8f70',
  storageBucket: 'entertainment-app-a8f70.appspot.com',
  messagingSenderId: '764654686039',
  appId: '1:764654686039:web:52c983be5627e69d203812',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
const provider = new GoogleAuthProvider();

const db = getFirestore();

export const createUserDocFromUserAuth = async (userAuth) => {
  const userRef = doc(db, 'user', userAuth.uid);
  console.log(userRef);

  const userSnap = await getDoc(userRef);

  if(!userSnap.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      setDoc(userRef, {
        displayName,
        email,
        createdAt,
        data
      })      

    } catch (error) {
      console.log('error while creating user', error);
    }
  }
  return userRef;
}

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const bookmarkingFunc = async (userAuth, id) => {
  const userRef = doc(db, 'user', userAuth.uid);
  const userSnap = await getDoc(userRef);
  console.log(userSnap);

  // if(userSnap.exists()){
  //   let [{isBookmarked}] = data[id];
  //   console.log(isBookmarked);
  //   isBookmarked = isBookmarked? false: true;
  //   try {
  //     setDoc(db, {
  //       data[id]
  //     })
  //   } catch (error) {
  //     console.log('error bookmarking', error);
  //   }
  // }
  return userRef;
}


