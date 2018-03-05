import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyCVesHby-X11H6ZDq3AdpBcUTGqUZo9FY4",
    authDomain: "testforweb-4142a.firebaseapp.com",
    databaseURL: "https://testforweb-4142a.firebaseio.com",
    projectId: "testforweb-4142a",
    storageBucket: "testforweb-4142a.appspot.com",
    messagingSenderId: "6543032742"
  };
  firebase.initializeApp(config);

  export default firebase;