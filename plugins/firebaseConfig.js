import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyBPuXLY29VH973ml-hqKbMlHFN_kZNSXPs',
    authDomain: 'project-clinic001.firebaseapp.com',
    databaseURL: 'https://project-clinic001.firebaseio.com',
    projectId: 'project-clinic001',
    storageBucket: 'project-clinic001.appspot.com',
    messagingSenderId: '318032054037',
    appId: '1:318032054037:web:8847f6354371fd2edecb1c',
    measurementId: 'G-L9RWT99JLG'
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
