import { config } from "dotenv";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

config();

const firebaseConfig = {
  projectId: process.env.REACT_APP_PROJECT_ID
};

firebase.initializeApp(firebaseConfig);

export default firebase;
