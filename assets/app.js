$(document).ready(function() {
console.log("ready")
// Moment.js current time test
var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

var submitButton = $('#submit-button');
var table = $('#train-schedule-table')
var currentDate = new Date();
console.log(currentDate);
submitButton.on('click', function (event) {
    console.log('clicked');
    var trainName = $('#trainName').val().trim();
    var destination = $('#destination').val().trim();
    var firstTrainTime = $('#firstTrainTime').val().trim();
    var frequency = $('#frequency').val().trim();
    var newRow = `
<tr>
    <td>${trainName}</td>
    <td>${destination}</td>
    <td>${frequency}</td>  
    <td>${firstTrainTime}</td>
      
  
</tr>
`
    table.append(newRow);
});





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