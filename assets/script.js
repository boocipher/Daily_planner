// show current time&date in header with moment.js
function showDate() {
    var setDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log("It is " + setDate);
    $('#currentDay').text(setDate);
}

showDate();

// function for div color based on current time

// iterates over all input elements to set their background color
$(document).ready(function() {
    var currentHour = moment().format('H');
    var parsedHour = parseInt(currentHour, 10);
    console.log(parsedHour);
    $("input").each(function(index, element) {
        $(element).css("backgroundColor", "gray");
        var attr = $(element).attr("id");
        console.log(attr);
        var parsedAttr = parseInt(attr, 10);
        console.log(parsedAttr);
        if (parsedHour === parsedAttr) {
            $(element).css("backgroundColor", "red");
        } else if (parsedHour < parsedAttr) {
            $(element).css("backgroundColor", "green");
        }
    // generate key and get item from local storage
    var key = moment().format('YYYY-MM-DD');
    key = key + "-" + attr;
    console.log(key);
    });
});

// save with local storage
// listener function for the button
// from listener/button event, which hour is clicked
// get text from the input element
// setItem 

// pull saved events when adding new