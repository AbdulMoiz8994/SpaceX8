importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging-compat.js');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBEosuiSVAcHJMnJrEPMZjaixGo0qiAo3o",
    authDomain: "spacex8-e3a47.firebaseapp.com",
    projectId: "spacex8-e3a47",
    storageBucket: "spacex8-e3a47.appspot.com",
    messagingSenderId: "868136495232",
    appId: "1:868136495232:web:377a74b9ac89176b2d9e65",
    measurementId: "G-N7W1RLSXXP"
  };


firebase.initializeApp(firebaseConfig);
firebase.messaging();  