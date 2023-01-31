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

export const signInUsingGoogle = async (setUser) => {
    const result = await signInWithPopup(auth, provider);
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token =  credential.accessToken;
    const user = result?.user;
    setUser(user);
    console.log(user);
}





