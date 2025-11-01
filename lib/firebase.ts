import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDVMEuaGdrWpY9y1NfmCQVir4vo3WwUkFs",
  authDomain: "attuluri-52763.firebaseapp.com",
  projectId: "attuluri-52763",
  storageBucket: "attuluri-52763.firebasestorage.app",
  messagingSenderId: "10344977257",
  appId: "1:10344977257:web:816e62a7bf048bf43823f8",
  measurementId: "G-CQ4ZWT4RLL",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)

export default app
