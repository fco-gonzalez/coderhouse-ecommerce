// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAGlFTNQbHUlBAqCaMAxvH5mYgUEiepaCI',
  authDomain: 'coderhouse-ecommerce-v1.firebaseapp.com',
  projectId: 'coderhouse-ecommerce-v1',
  storageBucket: 'coderhouse-ecommerce-v1.appspot.com',
  messagingSenderId: '533064083443',
  appId: '1:533064083443:web:a10ec1a4ea847e1e59d486',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseConnect = () => app;
