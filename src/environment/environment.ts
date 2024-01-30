const env = {
  firebaseConfig: {
    apiKey: "AIzaSyDpKIviV49nB7Zgy-ubqHjRa_U4rB9ta3E",
    authDomain: "bm-real-estate-sample.firebaseapp.com",
    projectId: "bm-real-estate-sample",
    storageBucket: "bm-real-estate-sample.appspot.com",
    messagingSenderId: "464074707515",
    appId: "1:464074707515:web:a0812bb5f1102498f3c21e",
    measurementId: "G-QQVTYTV6ML",
  },
  api : {
    core : 'http://localhost:3000/api/v1/',
    lookup : 'properties/get-localities/',
    properties : 'properties/'
  },
  mapbox: {
    accessToken: 'pk.eyJ1IjoidGhlbmVlZGxlY29tcGFzcyIsImEiOiJjbGE1aDNsMjgwOGZhM29wdGRjamFuemg0In0.AR9FeJWL4kL2-SD0Ql1KRw'
  } 
};

export default env;
