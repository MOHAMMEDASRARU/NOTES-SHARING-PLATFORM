// lib/firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
   apiKey: "AIzaSyCodXnun2WQJgR5S825sDyGYXL6h3nb6oU",
  authDomain: "loginsignup-cc854.firebaseapp.com",
  projectId: "loginsignup-cc854",
  storageBucket: "loginsignup-cc854.firebasestorage.app",
  messagingSenderId: "161379903040",
  appId: "1:161379903040:web:be0e66a1c21884471e61a5",
  measurementId: "G-QEV901D4KV"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export { auth, provider }
