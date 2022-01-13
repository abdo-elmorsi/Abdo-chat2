// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCWg8h9hjQ3q29jBTgX2ZW3zyOvmYB7nmk",
	authDomain: "adoodlz-9ce97.firebaseapp.com",
	databaseURL: "https://adoodlz-9ce97-default-rtdb.firebaseio.com",
	projectId: "adoodlz-9ce97",
	storageBucket: "adoodlz-9ce97.appspot.com",
	messagingSenderId: "1860931592",
	appId: "1:1860931592:web:6995ffff9c1c2729d0c1bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app