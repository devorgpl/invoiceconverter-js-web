import { getAnalytics } from 'firebase/analytics';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
    signOut,
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';
import {
    getDatabase,
    ref,
    set,
    get,
    child,
} from 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyAYwGw856XQl0YBpOj8cYUsD4m-iAljeuE',
    authDomain: 'rabbitsfight.firebaseapp.com',
    databaseURL:
      'https://rabbitsfight-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'rabbitsfight',
    storageBucket: 'rabbitsfight.appspot.com',
    messagingSenderId: '393822945702',
    appId: '1:393822945702:web:23a38fec6bfea2dce48f67',
    measurementId: 'G-SXVWNQ5W48',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async (): Promise<void> => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const { user } = res;
    const {
        uid,
        displayName,
        email,
        emailVerified,
        isAnonymous,
        metadata,
        phoneNumber,
        photoURL,
        ...userData
    }: any = user;
    userData.authProvider = 'google';
    const snapshot = await get(child(ref(db), `users/${user.uid}`));
    if (!snapshot.exists()) {
      console.log('new users: ', user);
      await set(ref(db, `users/${user.uid}`), userData);
    } else {
      console.log('already there: ', snapshot.val(), userData);
    }
  } catch (err) {
    console.error(err);
  }
};

const logout = (): void => {
    signOut(auth);
};

export {
    auth,
    db,
    signInWithGoogle,
    logout,
    analytics,
};
