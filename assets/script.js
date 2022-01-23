showDate();
setColor();
setInterval(setColor, 60000); // CHECK time and update div color without refresh every minute


// show current time&date in header with moment.js
function showDate() {
    var setDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log("It is " + setDate);
    $('#currentDay').text(setDate);
}

// function for div color based on current time
// iterates over all input elements to set their background color
function setColor() {
$(document).ready(function() {
    var currentHour = moment().format('H');
    var parsedHour = parseInt(currentHour, 10);
    console.log('Current hour string to int (parsed) is: ' + parsedHour);
    $("input").each(function(index, element) {
        $(element).css("backgroundColor", "gray");
        var attr = $(element).attr("id");
        console.log('Field id is: ' + attr);
        var parsedAttr = parseInt(attr, 10);
        console.log('Id to int (parsed): ' + parsedAttr);
        if (parsedHour === parsedAttr) {
            $(element).css("backgroundColor", "red");
        } else if (parsedHour < parsedAttr) {
            $(element).css("backgroundColor", "lightgreen");
        }
       
    });

});
}

// save with local storage
function handleSave(event) {
    // get the id of saveBtn that is clicked
    var hourId = $(this).attr("data-index");
    console.log('button clicked id: ' + hourId);
    // save data from the input area in local storage
    var key = moment().format('YYYY-MM-DD');
    key = key + "-" + hourId;
    localStorage.setItem(key, $("input#" + hourId).val());
    console.log('The value for Set localStorage is: ', $("input#" + hourId).val());
  }

// listener function for the button; attaches handler for the save btns
$(".saveBtn").on("click", handleSave);


