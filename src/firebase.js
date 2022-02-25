import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs
} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBt5nKm6PE5zd67jW2yI_fClPCRSDKyUyM",
  authDomain: "tinderclone-37802.firebaseapp.com",
  projectId: "tinderclone-37802",
  storageBucket: "tinderclone-37802.appspot.com",
  messagingSenderId: "327331703750",
  appId: "1:327331703750:web:0cd03cb7ca4d2efa53e0c7"
};
 //init firebase app
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'people')

//get collection data
getDocs(colRef)
.then((snapshot) => {
  let people = []
  snapshot.docs.forEach((doc) => {
    people.push({ ...doc.data(), name: doc.name })
  })
  
})