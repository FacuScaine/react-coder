import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBEQcgs-Hj1tJUsJtmuysmO01MOq3m-9K4",
//   authDomain: "react-coder-d72c5.firebaseapp.com",
//   projectId: "react-coder-d72c5",
//   storageBucket: "react-coder-d72c5.appspot.com",
//   messagingSenderId: "773400036976",
//   appId: "1:773400036976:web:1aa8a33d86e2f9126b16b5",
//   measurementId: "G-H9FL9YF5TC"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
