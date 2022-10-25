import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import {
  getFirestore,
  doc, 
  getDoc,
  getDocs,
  setDoc,
  collection,
  writeBatch,
  query,
  QuerySnapshot,
  snapshotEqual
} from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUJvDZ9PWZa5LM0gxlLqf1agsAkS2cOE4",
  authDomain: "krystella-s-boutique.firebaseapp.com",
  projectId: "krystella-s-boutique",
  storageBucket: "krystella-s-boutique.appspot.com",
  messagingSenderId: "784759118105",
  appId: "1:784759118105:web:615821f49dad942d088d88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt:'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopUp = async () => {
  await signInWithPopup(auth, googleProvider);
  return auth;
}
export const db = getFirestore();

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'Categories');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  const items =  querySnapshot.docs.reduce((acc, doc) => {
    acc[(doc.id).toLowerCase()] = doc.data().items;
    return acc;
  }, []);

  return items;
}


export const testing = () => {
  return "hello";
}
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {  
  if (!userAuth) return;
  // add new data in the collection users
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    }
    catch (error) {
      console.log('error creating the user', error.message);
    }
  }


  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async(email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => {
  await signOut(auth);
}

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
}