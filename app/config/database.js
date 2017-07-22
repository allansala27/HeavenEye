// Firebase 
import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC9WpJ8YES3GzQLxkX-gbFS2v4Ot8-T2ug",
    authDomain: "heaveneye-ace6a.firebaseapp.com",
    databaseURL: "https://heaveneye-ace6a.firebaseio.com",
    projectId: "heaveneye-ace6a",
    storageBucket: "heaveneye-ace6a.appspot.com",
    messagingSenderId: "377871605720"
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export default database;