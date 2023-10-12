// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBybrfcedXdXqJBLpr-W8fl_jqDokKzvDM",
  authDomain: "dreamy-day-planner.firebaseapp.com",
  projectId: "dreamy-day-planner",
  storageBucket: "dreamy-day-planner.appspot.com",
  messagingSenderId: "177403075091",
  appId: "1:177403075091:web:621e180465d3b8d8c07de6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth ;