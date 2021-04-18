var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function() {

  $(".saveBtn").on("click", function() {
  
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
 

    localStorage.setItem(time, text);
    console.log("<p> was clicked");
  
  });

  
  function timeTracker() {
    //get current number of hours.
    var timeNow = moment().hours();

    // loop over time blocks
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("-")[1]);

        // To check the time and add the classes for background indicators
        if (blockTime < timeNow) {
          $(this).addClass("past");
          $(this).removeClass("future");
          $(this).removeClass("present");
        }
        else if (blockTime === timeNow) {
          $(this).removeClass("past");
          $(this).addClass("present");
          $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
      });
  }

  
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  timeTracker();
})


