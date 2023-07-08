// 必要な関数を import
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCDWlfIy5-0lB4clWdBppY3mGdCOArDSEw",
  authDomain: "week7-f9628.firebaseapp.com",
  projectId: "week7-f9628",
  storageBucket: "week7-f9628.appspot.com",
  messagingSenderId: "209397577825",
  appId: "1:209397577825:web:a79bcb5d9b0dbf31de5220",
  measurementId: "G-Y48YB3NHTT",
}

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)
