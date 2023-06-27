$(document).ready(function () {
  $("#addForm").submit(function (event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the values of the input fields
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());

    // Create the request payload
    var data = JSON.stringify({ number1: number1, number2: number2 });

    // Send the POST request
    $.ajax({
      type: "POST",
      url: "http://localhost:8000/add",
      contentType: "application/json",
      data: data,
      success: function (response) {
        // Handle the successful response
        var sum = response.sum;
        $("#result").text("Sum: " + sum);
      },
      error: function (xhr, status, error) {
        // Handle any errors
        console.error(error);
      },
    });
  });
});
