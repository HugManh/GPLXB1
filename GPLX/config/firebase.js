// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";

// Firebase configuration read from Expo public envs
const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Validate required envs early for clearer errors in development
const requiredEnvKeys = [
    "EXPO_PUBLIC_FIREBASE_API_KEY",
    "EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN",
    "EXPO_PUBLIC_FIREBASE_PROJECT_ID",
    "EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET",
    "EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID",
    "EXPO_PUBLIC_FIREBASE_APP_ID"
];

requiredEnvKeys.forEach((key) => {
    if (!process.env[key]) {
        // eslint-disable-next-line no-console
        console.warn(`Missing env ${key}. Check your app config or .env settings.`);
    }
});

// Ensure singleton app instance (important with Fast Refresh / hot reload)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialize Firestore with settings that work well in React Native/Expo
// experimentalAutoDetectLongPolling helps avoid networking issues in RN environments
let db;
try {
    db = initializeFirestore(app, { experimentalAutoDetectLongPolling: true });
} catch (err) {
    // If Firestore already initialized, fall back to getter
    db = getFirestore(app);
}

export { app, db };