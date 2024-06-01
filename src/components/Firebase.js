
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import React, { Component } from 'react';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGmVHj6bdrMLbS8CyuI2gBgq_BaqwMNXM",
    authDomain: "authentication-6d25d.firebaseapp.com",
    projectId: "authentication-6d25d",
    storageBucket: "authentication-6d25d.appspot.com",
    messagingSenderId: "603120833587",
    appId: "1:603120833587:web:ce7cd27ee761dce7d33f46",
    measurementId: "G-90CLRKHJC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };