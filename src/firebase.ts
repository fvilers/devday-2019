import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = { projectId: "tasks-devday-2019" };

firebase.initializeApp(firebaseConfig);

export default firebase;
