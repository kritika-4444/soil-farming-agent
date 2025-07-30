// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApv6v7snJlcrWOKfM1vpILS9ajImtlZnk",
  authDomain: "soil-farming-agent-50f96.firebaseapp.com",
  projectId: "soil-farming-agent-50f96",
  storageBucket: "soil-farming-agent-50f96.firebasestorage.app",
  messagingSenderId: "959137934457",
  appId: "1:959137934457:web:ea48d1a60994697ceeb8a8",
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
