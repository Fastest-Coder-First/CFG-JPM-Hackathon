import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
<<<<<<< HEAD
import { getAuth } from "firebase/auth";
=======
import { getAuth } from 'firebase/auth'
>>>>>>> ac470322ca793858df2258104ce87654f08ec631

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };

<<<<<<< HEAD
  const app=initializeApp(firebaseConfig);
 export  const db=getFirestore(app);    
 export const auth = getAuth(app);
=======
const app=initializeApp(firebaseConfig);
export  const db=getFirestore(app);    
export const auth = getAuth(app)
>>>>>>> ac470322ca793858df2258104ce87654f08ec631
