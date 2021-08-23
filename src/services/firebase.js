import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBT7DVUL8KKMG8IP1FP6PDBkjxHRnUVQvU",
    authDomain: "myapp-react-gb.firebaseapp.com",
    databaseURL: "https://myapp-react-gb-default-rtdb.firebaseio.com",
    projectId: "myapp-react-gb",
    storageBucket: "myapp-react-gb.appspot.com",
    messagingSenderId: "67690537208",
    appId: "1:67690537208:web:5214260a1ff79ebe5f1b0d"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const auth = firebase.auth();
