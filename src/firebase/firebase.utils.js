import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyDToKGC5XotI4odS8wMEYlbpu7rOnVuCCM",
        authDomain: "crown-cloth-fd26f.firebaseapp.com",
        databaseURL: "https://crown-cloth-fd26f.firebaseio.com",
        projectId: "crown-cloth-fd26f",
        storageBucket: "crown-cloth-fd26f.appspot.com",
        messagingSenderId: "492815367336",
        appId: "1:492815367336:web:20221ee2ebacde5a5fd69d",
        measurementId: "G-EYS6ZSJTEP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
