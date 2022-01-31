import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBCN4HMd0NosYxG587IbutMH5k81iO8EpI",
  authDomain: "imagegallery-83cb3.firebaseapp.com",
  projectId: "imagegallery-83cb3",
  storageBucket: "imagegallery-83cb3.appspot.com",
  messagingSenderId: "905275107661",
  appId: "1:905275107661:web:7152917b4f68e2ae3c2f04"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };