// Function to set and get the last visit cookie
    function setLastVisitCookie() {
        var lastVisit = Cookies.get('lastVisit');
        if (lastVisit) {
            // If cookie exists, display welcome back message with last visit time
            $('#welcomeMessage').text("Welcome back! Your last visit was " + lastVisit);
        } else {
            // If cookie doesn't exist, display first-time visit message
            $('#welcomeMessage').text("Welcome to my homepage!");
            // Set cookie for the current visit
            Cookies.set('lastVisit', new Date().toLocaleString("en-US", {timeZone: "America/New_York"}));
        }
    }

    // Get current time in EST
    $('#currentTime').text("Current Eastern Standard Time: " + new Date().toLocaleString("en-US", {timeZone: "America/New_York"}));
    
    // Call the function to set and get the cookie
    setLastVisitCookie();



var shown = false;

// Function to show/hide email using jQuery
function showhideEmail() {
  if (shown) {
    $('#email').html("Show my email");
    shown = false;
  } else {
    var myemail = "<a href='mailto:jastimi@mail.uc.edu'>jastimi@mail.uc.edu</a>";
    $('#email').html(myemail);
    shown = true;
  }
}

// Attach click event handler using jQuery
$('#email').click(showhideEmail);




$(document).ready(function() {
    // Function to fetch a new joke from the JokeAPI
    function fetchJoke() {
        $.get("https://v2.jokeapi.dev/joke/Any",
            function(result) {
                if (result.error) {
                    console.error("Error fetching joke: " + result.message);
                    return;
                }
                console.log("From jokeAPI: " + JSON.stringify(result));
                if (result.type === "single") {
                    $("#joke").html("Here's a joke for you: " + encodeInput(result.joke));
                } else if (result.type === "twopart") {
                    $("#joke").html("Here's a joke for you: " + encodeInput(result.setup) + "<br>" + encodeInput(result.delivery));
                }
            });
    }

    // Initial fetch of joke
    fetchJoke();

    // Fetch a new joke every minute
    setInterval(fetchJoke, 60000);

    // Function to encode special characters
    function encodeInput(input) {
        return $("<div>").text(input).html();
    }
});




$(document).ready(function() {
  $("#get-weather-btn").click(function() {
    var city = $("#city").val();
    // API request URL
    var apiUrl = "https://api.weatherbit.io/v2.0/current?city=" + city + "&key=311a3d25109f43f4a0fcc2dd49534e98";

    // Fetch weather data from the API
    $.getJSON(apiUrl, function(response) {
      var weatherData = response.data[0]; // Assuming the first result is the current weather
      var cityName = weatherData.city_name;
      var temperature = weatherData.temp;
      var weatherIcon = weatherData.weather.icon;
      var weatherDescription = weatherData.weather.description;

      // Display weather information on the page
      $("#city-name").text(cityName);
      $("#temperature").text("Temperature: " + temperature + "°C");
      $("#weather-icon").attr("src", "https://www.weatherbit.io/static/img/icons/" + weatherIcon + ".png").attr("alt", weatherDescription);
    })
    .fail(function(error) {
      console.error("Error fetching weather data:", error);
    });
  });
});