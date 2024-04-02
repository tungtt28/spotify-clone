import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAx_mBkHbMGBkgIjE5Z27pAMP9RxbvHdZ4",
  authDomain: "spotify-clone-7cd32.firebaseapp.com",
  projectId: "spotify-clone-7cd32",
  storageBucket: "spotify-clone-7cd32.appspot.com",
  messagingSenderId: "562614742254",
  appId: "1:562614742254:web:1f2e61a6110ff3812dd7ff",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
