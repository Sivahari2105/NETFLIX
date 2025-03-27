import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"; 
import { getFirestore, collection, addDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCHkIZKESUG6r4BZvYA5rNWLBh-3vD1p1g",
  authDomain: "netflix-86a6f.firebaseapp.com",
  projectId: "netflix-86a6f",
  storageBucket: "netflix-86a6f.firebasestorage.app",
  messagingSenderId: "90127427442",
  appId: "1:90127427442:web:659f0700edb394ab729feb"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup=async(name, email, password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch(error){
        console.log(error);
        alert(error);
    }
}

const login=async()=>{
    try {
        signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const logout=async()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};