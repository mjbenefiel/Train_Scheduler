<h1>Train Scheduler</h1>

Live version: https://mjbenefiel.github.io/Train_Scheduler
<hr></hr>

Author: Michael Benefiel

Feel free to use some or all of this code if you're trying to complete a similar project.
<hr></hr>

<h3> App screenshot </h3>

![alt text](https://github.com/mjbenefiel/Train_Scheduler/blob/master/assets/images/train.jpg "Train Scheduler")

<hr></hr>

<h2> Project overview</h2>
This train scheduler app incorporates Firebase to host arrival and departure data. It retrieves and manipulates the information with Moment.js. Further, it provides up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.


The app still needs styled; however, it's completely functional.
<hr></hr>

<h2> How it works </h2>
Fill out all fields under "Add a train" section and hit submit. All data is compiled behind the scenes and populates under "Current train schedule" section.
<hr></hr>

<h2>Technology used</h2>

[Bootstrap 4.1.2](http://getbootstrap.com/)

[jQuery 3.3.1](https://jquery.com/)

[Moment.js](https://momentjs.com/)

[Firebase](https://firebase.google.com/)

<hr></hr>

<h4>Below is a thorough, but not comprehensive, step-by-step process of how I got the app running in terms of code</h4>

- Initialize Firebase

- Declare Variables

- Pull user input from fields

- Run calculations for when train next train is arriving, etc.

- Push values and calculated values to current train schedule board

- Data stored in Firebase
