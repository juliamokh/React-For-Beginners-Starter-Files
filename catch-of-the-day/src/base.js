import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAFQAQRDQFJYX9SkIE-vsyK74wwBVLtVGU",
  authDomain: "catch-of-the-day-ripley.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-ripley.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
