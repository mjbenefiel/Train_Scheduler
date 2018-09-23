$(document).ready(function() {
console.log("ready")
// Moment.js current time test
var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB1_cx3O08SnICMLnnQ-VLcDbTZHFUXWyg",
    authDomain: "train-scheduler-8d985.firebaseapp.com",
    databaseURL: "https://train-scheduler-8d985.firebaseio.com",
    projectId: "train-scheduler-8d985",
    storageBucket: "",
    messagingSenderId: "967065028052"
  };
  firebase.initializeApp(config);



}); // end of document.ready