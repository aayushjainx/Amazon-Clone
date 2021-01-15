import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBgp92diYbRTCdfA0oloPehkuJU4n3MB9c',
  authDomain: 'amazo-nclone7.firebaseapp.com',
  projectId: 'amazo-nclone7',
  storageBucket: 'amazo-nclone7.appspot.com',
  messagingSenderId: '1045071738610',
  appId: '1:1045071738610:web:c604ceb7b550b7f6f4026b',
  measurementId: 'G-9HSFC9BBKP',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
