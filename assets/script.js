// show current time&date in header with moment.js
function showDate() {
    var setDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log("It is " + setDate);
    $('#currentDay').text(setDate);
}

showDate();

// function for div color based on current time
// save with local storage
// pull saved events when adding new