import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBykoQnfm-LeXjicbpCVXTivaqJwWgKYzY",
    authDomain: "wemoe-contact.firebaseapp.com",
    databaseURL: "https://wemoe-contact.firebaseio.com",
    projectId: "wemoe-contact",
    storageBucket: "wemoe-contact.appspot.com",
    messagingSenderId: "285127103071"
  };
export const app = firebase.initializeApp(config)
export const database = app.database()
