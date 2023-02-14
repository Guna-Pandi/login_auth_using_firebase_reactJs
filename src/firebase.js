import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey:"GIVE_YOURS",
  authDomain:"GIVE_YOURS",
  projectId:"GIVE_YOURS" ,
  storageBucket:"GIVE_YOURS" ,
  messagingSenderId:"GIVE_YOURS",
  appId:"GIVE_YOURS"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
