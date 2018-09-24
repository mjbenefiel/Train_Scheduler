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
var database = firebase.database();

// global variables
var currentTime = '';
var trainName = '';
var destination = '';
var frequency = '';
var firstTrainTime = '';
var nextTrainTime = '';
var minutesAway = '';
var firstTimeConverted = '';
var diffTime = '';
var tRemainder = '';
var dataHolder = '';
var getKey = '';
var submitButton = $('#submit-button');
var table = $('#train-schedule-table')

$(document).ready(function () {
	console.log("ready")

	// function to append data to new row in train schedule
	submitButton.on('click', function (event) {
		console.log('clicked');
		trainName = $('#trainName').val().trim();
		destination = $('#destination').val().trim();
		frequency = $('#frequency').val().trim();
		firstTrainTime = $('#firstTrainTime').val().trim();
		firstTimeConverted = moment(firstTrainTime, "hh:mm").subtract(1, "years")
		currentTime = moment();
		diffTime = moment().diff(moment(firstTimeConverted), "minutes");
		tRemainder = diffTime % frequency;
		minutesTillTrain = frequency - tRemainder;
		nextTrain = moment().add(minutesTillTrain, "minutes");
		nextTrainTime = moment(nextTrain).format("hh:mm");
		var newRow = `
<tr>
    <td>${trainName}</td>
    <td>${destination}</td>
    <td>${frequency}</td>  
    <td>${nextTrainTime}</td>
    <td>${minutesTillTrain}</td>
</tr>
`
		table.append(newRow);
		// clear inputs after being entered
		$('#trainName').val('');
		$('#destination').val('');
		$('#firstTrainTime').val('');
		$('#frequency').val('');

		dataHolder = database.ref().set({
			trainName: trainName,
			destination: destination,
			firstTrainTime: firstTrainTime,
			frequency: frequency,
			nextTrainTime: nextTrainTime,
			minutesTillTrain: minutesTillTrain
		}); //end dataholder


	}); //end submit onclick


}); // end of document.ready