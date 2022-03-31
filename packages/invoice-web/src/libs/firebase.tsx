import { getAnalytics } from 'firebase/analytics';
// Import the functions you need from the SDKs you need
import { FirebaseError, initializeApp } from 'firebase/app';
import {
    signOut,
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    User,
    UserMetadata,
    connectAuthEmulator,
} from 'firebase/auth';
import {
    getDatabase,
    ref,
    set,
    get,
    child,
    connectDatabaseEmulator,
} from 'firebase/database';
import { useEffect, useState } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyDrUcAcus4UG3dcXBlclT81DcgC8VKRhRM",
  authDomain: "invoiceapp-e168d.firebaseapp.com",
  databaseURL: "https://invoiceapp-e168d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "invoiceapp-e168d",
  storageBucket: "invoiceapp-e168d.appspot.com",
  messagingSenderId: "415510153057",
  appId: "1:415510153057:web:6caab6566cf908329ba720",
  measurementId: "G-V64HKJYR6M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);
if (process.env.NODE_ENV === "development") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectDatabaseEmulator(db, "localhost", 9000);
}

export function useAuth() {
  const [authState, setAuthState] = useState({
    isSignedIn: false,
    pending: true,
    user: null,
  });

  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged((user) => setAuthState({ user, pending: false, isSignedIn: !!user }));
    return () => unregisterAuthObserver();
  }, []);

  return { auth, ...authState };
}

auth.onAuthStateChanged((user) => {
  console.log('fb ', user);
});

export interface CustomUser {
  uid: string,
  displayName: string,
  email: string,
  emailVerified: boolean,
  isAnonymous: boolean,
  metadata: UserMetadata,
  phoneNumber: string,
  photoURL: string,
  authProvider?: string;
}

const googleProvider = new GoogleAuthProvider();
const intSignInWithGoogle = async (): Promise<void> => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const { user } = res;
    const userData: CustomUser = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      isAnonymous: user.isAnonymous,
      metadata: user.metadata,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
    };
    userData.authProvider = 'google';
    const snapshot = await get(child(ref(db), `users/${user.uid}`));
    if (!snapshot.exists()) {
      await set(ref(db, `users/${user.uid}`), userData);
    }
  } catch (err) {
    if (err.code === 'auth/popup-closed-by-user') {
      return;
    }
    throw err;
  }
};

function signInWithGoogle(): Promise<void> {
  return intSignInWithGoogle().catch(err=> {
    if (err.code === 'auth/popup-closed-by-user') {
      return;
    }
    throw err;
  });
}

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
