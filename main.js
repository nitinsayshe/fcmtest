// Firebase config from your Firebase project
const firebaseConfig = {
    apiKey: "AIzaSyC147YZm7bhb8F7fogpurrBbyKPakoRcBw",
    authDomain: "test-fmx-ca25a.firebaseapp.com",
    projectId: "test-fmx-ca25a",
    storageBucket: "test-fmx-ca25a.firebasestorage.app",
    messagingSenderId: "986053538899",
    appId: "1:986053538899:web:3235e859ac35cce9dd42a6",
    measurementId: "G-8VJEXXPTMG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
const statusEl = document.getElementById("status");

async function getFcmToken() {
  const permission = await Notification.requestPermission();
  if (permission !== 'granted') {
    document.getElementById("status").innerText = "Permission denied";
    return;
  }

  const token = await messaging.getToken({
    vapidKey: "BB6xdKlu6EH3QpMu_-W5FWCYkNOSIZeuuit9F83DRTQxoebXUVcR0OwfK7K0VoJZHZf7n376sL9r7anEeOtf418"
  });

  if (token) {
    console.log("FCM Token:", token);
    document.getElementById("status").innerText = "FCM Token:\n" + token;
  } else {
    document.getElementById("status").innerText = "Failed to get token.";
  }
}


// async function getFcmToken() {
//     try {
//         console.log("firebase")
//         await Notification.requestPermission();
//         const token = await messaging.getToken({
//             vapidKey: "BB6xdKlu6EH3QpMu_-W5FWCYkNOSIZeuuit9F83DRTQxoebXUVcR0OwfK7K0VoJZHZf7n376sL9r7anEeOtf418"
//         });

//         if (token) {
//             console.log("FCM Token:", token);
//             statusEl.innerText = "FCM Token:\n" + token;
//         } else {
//             console.warn("No registration token available.");
//             statusEl.innerText = "No registration token available.";
//         }
//     } catch (err) {
//         console.error("Error getting FCM token:", err);
//         statusEl.innerText = "Error: " + err.message;
//     }
// }

getFcmToken();
