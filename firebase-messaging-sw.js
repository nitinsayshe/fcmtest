// This file must be in your project root!

importScripts('https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.1/firebase-messaging.js');

firebase.initializeApp({

    apiKey: "AIzaSyC147YZm7bhb8F7fogpurrBbyKPakoRcBw",
    authDomain: "test-fmx-ca25a.firebaseapp.com",
    projectId: "test-fmx-ca25a",
    storageBucket: "test-fmx-ca25a.firebasestorage.app",
    messagingSenderId: "986053538899",
    appId: "1:986053538899:web:3235e859ac35cce9dd42a6",
    measurementId: "G-8VJEXXPTMG"

});

const messaging = firebase.messaging();
