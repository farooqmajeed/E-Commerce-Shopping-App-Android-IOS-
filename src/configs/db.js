import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyA5uYhYY1JzTQLX5-46ClxKXIBXiIc1TyM",
    authDomain: "rashanwalay.firebaseapp.com",
    databaseURL: "https://rashanwalay.firebaseio.com",
    projectId: "rashanwalay",
    storageBucket: "rashanwalay.appspot.com",
    messagingSenderId: "535875098287"
};
firebase.initializeApp(config);


export const database = firebase.database();

export const auth = firebase.auth();

export default firebase;