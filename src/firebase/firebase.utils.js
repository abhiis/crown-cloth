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
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid  }`);
    const snapshot = await userRef.get();
    
    if(!snapshot.exits){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        }catch(error){
            console.log('Error creating user', error.message);

        }
    }
    return userRef;
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
