function calculateIntegral(value) {
  console.log(value);
  $.ajax({
    url: "http://localhost:8000/calculate/", // the endpoint
    type: "GET", // http method
    data: { integral: value }, // data sent with the get request

    // handle a successful response
    success: function (json) {
      console.log(json);
      console.log("success"); // another sanity check
    },

    // handle a non-successful response
    error: function (xhr, errmsg, err) {
      console.log(err);
      console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
    },
  });
}
