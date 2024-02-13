# WAPH-Web Application Programming and Hacking
## Instructor: Dr. Phu Phung

## Student

**Name**: Mohan Sai Jasti

**Email**: jastimi@mail.uc.edu

**Short-bio**: Mohan has keen interests in web development and DevOps.

![Mohan's headshot](/images/headshot2.jpg)

# Individual Project 1
## Front-end Web Development with a Professional Profile Website on github.io cloud service

## Overview and Requirements 

This project encompasses the development of a personal website aimed at showcasing Mohan Sai Jasti's professional profile. Leveraging GitHub's cloud hosting service, the website is built primarily using HTML with enhancements from Bootstrap templates.Furthermore, the website is equipped with various JavaScript functionalities, including show/hide email, digital and analog clocks, and social media sharing buttons, and the integration of a page tracker from Google Analytics to monitor website traffic. Additionally, two public web APIs, namely the JokeAPI and WeatherAPI, are integrated to display jokes and current weather information dynamically.

clikable url to my website [https://jastimi.github.io/](https://jastimi.github.io/)

Direct clickable link to my lab folder on GitHub.com [https://github.com/jastimi/jastimi.github.io](https://github.com/jastimi/jastimi.github.io).


### General requirements:  ​

I created a personal website on GitHub cloud (github.io) as a professional profile using the "index.html" file.
Below is the code and working screenshot of the website. 

Included file `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Mohan Sai Jasti - Professional Profile</title>
</head>
<body>
   <header>
        <h1>Mohan Sai Jasti</h1>
        <img src="images/headshot2.jpg" alt="Mohan's headshot">
        <p>Contact Information:</p>
        <ul>
            <li>Email: <a href="mailto:jastimi@mail.uc.edu">jastimi@mail.uc.edu</a></li>
            <li>Phone: (513) 399-0191</li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/mohansj/">Mohan Sai Jasti</a>></li>
        </ul>
    </header>

    <section id="education">
        <h2>Education</h2>
        <p><strong>Master of Science - Information Technology</strong><br>
        University of Cincinnati, Ohio<br>
        Expected graduation date: Dec. 2024</p>

        <p><strong>Bachelor of Technology - Electrical and Electronics Engineering</strong><br>
        Vignan's Foundation for Science, Research and Technology, India<br>
        Jul. 2017 - Aug. 2021<br>
        GPA: 9.28/10</p>
    </section>

    <section id="skills">
        <h2>Skills</h2>
        <p><strong>Languages:</strong> C, Node.js, Express.js, React.js, HTML, JavaScript</p>
        <p><strong>Technologies & Tools:</strong> Salesforce, Informatica IICS</p>
        <p><strong>DevOps:</strong> Docker, Kubernetes, AWS</p>
        <p><strong>Database:</strong> MySQL, MongoDB</p>
        <p><strong>Operating Systems:</strong> Windows, Linux, Mac OS</p>
    </section>

    <section id="experience">
        <h2>Experience</h2>
        <div class="job">
            <h3>Cognizant Technology Solutions</h3>
            <p><strong>Programmer Analyst</strong><br>
            Aug. 2021 - Aug. 2023<br><p>
            <ul>
            <li>Proficient in Node.js and Express.js, contributing to the development and maintenance of robust software applications.</li>
            <li>Revamped Oracle and MongoDB database management processes, implementing efficient SQL scripts that reduced query response time by 40\% and improved system performance.</li>
            </ul>
        </div>
    </section>

    <a href="https://jastimi.github.io/waph.html">Click here to view my Web Application Programming and Hacking Course</a>

</body>
</html>

```

![screenshot1.png](/images/P1screenshot1.png)


I created a new html page "waph.html" to introduce the WAPH course and linked it to my professional profile page.

Included file `waph.html`:

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>WAPH-Mohan Sai Jasti</title>
</head>
<body>
	<div class="container wrapper">
		<div id="top">
			<h1>Web Application Programming and Hacking</h1>
			<h2>Front-end Web Development Individual Project</h2>
			<h3>Instructor: Dr. Phu Phung</h3>
		</div>
		<div id="menubar">
			<h3>Student: Mohan Sai Jasti</h3>
  		</div>
    		<div id="main">
			<p>A simple HTML page </p>
			Using the <a href="https://www.w3schools.com/html"> W3Schools template</a>
    		</div>
 	 </div>

 	 <div id="course information">
        <h2>Hands-on Exercises</h2>
        <h3>Labs</h3>
        <ul>
            <li>
            	Lab 1: Foundations of the Web
            	<p>This lab introduces students to using wireshark tool to capture the packets and examine those packets, sending HTTP requests from telnet, writing CGI web applications in C, deploying them into webserver and invoking them, various commands in PHP and writing basic web applications in PHP, sending POST requests from curl.</p>
            </li>
            <li>
            	Lab 2: Front-end Web Development
            	<p>This lab introduces topics such as the fundamentals of HTML structure, event handling, inline and external JavaScript, Ajax requests, CSS styling, jQuery usage, and integrating Ajax and the fetch API with Web APIs.</p>
            </li>
        </ul>

        <h3>Hackathons</h3>
        <ul>
            <li>
            	Hackathon 1: Cross-site Scripting Attacks and Defenses
            	<p>This hackathon explores XSS vulnerabilities across different levels of a web application and proposes corresponding defenses. It identifies vulnerabilities in input forms and filters and suggests defensive measures like input validation and encoding to mitigate XSS risks.</p>
            </li>
        </ul>

        <h3>Projects</h3>
        <ul>
            <li>Project 1: Front-end Web Development with a Professional Profile Website on github.io cloud service </li>
        </ul>
    </div>
</body>
</html>

```

![screenshot2.png](/images/P1screenshot2.png)


### Non-technical requirements​


I updated my professional page with Bootstrap template from [https://startbootstrap.com/previews/resume#google_vignette](https://startbootstrap.com/previews/resume#google_vignette
)
Below is the screenshot of my page after adding bootstrap templates.

![screenshot3](/images/P1screenshot3.png)


Next I used the page tracker from [https://analytics](https://analytics.withgoogle.com/) to count the views to my page. 

The code inserted for tracking page is:

```js

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-HGPH8NKPC0"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-HGPH8NKPC0');
</script>

```
Below is the screenshot from page tracker showing the number of views of my website.

![screenshot4](/images/P1screenshot4.png)


### Technical requirements ​

#### Basic JavaScript code ​


I used jQuery to implement the javascript code of show/hide your email and angular js to implement the code of digital clock and analog clock. I also implemented a new functionality for sharing my pages on social media sites.

This is the html code for these functionalities.

```html
<section class="resume-section" id="home">
<div class="resume-section-content">
  <!-- Show/hide email -->
  <div id="email">Show my email</div>

  <!-- Digital clock -->
  <div id="digit-clock">{{ digitalClock }}</div>

  <!-- Analog clock -->
  <canvas id="analog-clock" width="300" height="300" style="background-color: #999"></canvas>

  <div style="margin-bottom: 90px;"></div>
  <h3>Social Media Sharing</h3>

  <!-- Facebook Share Button -->
  <button ng-click="shareOnFacebook()">Share on Facebook</button><br><br>

  <!-- Twitter Share Button -->
  <button ng-click="shareOnTwitter()">Share on Twitter</button><br><br>

  <!-- LinkedIn Share Button -->
  <button ng-click="shareOnLinkedIn()">Share on LinkedIn</button><br><br>

</div>
</section>

```

Below is the angular js code.

```js
var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $window, $interval) {
    // Function to share content on Facebook
    $scope.shareOnFacebook = function() {
        var url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent($window.location.href);
        $window.open(url, '_blank');
    };


    // Function to share content on Twitter
    $scope.shareOnTwitter = function() {
        var url = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent($window.location.href);
        $window.open(url, '_blank');
    };

    // Function to share content on LinkedIn
    $scope.shareOnLinkedIn = function() {
        var url = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent($window.location.href);
        $window.open(url, '_blank');
    };

    // Function to show/hide email
    $scope.emailButtonLabel = "Show my email";
    $scope.showhideEmail = function() {
        if ($scope.emailButtonLabel === "Show my email") {
            var myemail = "<a href='mailto:jastimi" + "@" + "mail.uc.edu'>jastimi" + "@" + "mail.uc.edu</a>";
            $scope.emailButtonLabel = myemail;
        } else {
            $scope.emailButtonLabel = "Show my email";
        }
    };

    // Function to display digital clock
    $scope.displayTime = function() {
        var now = new Date();
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        $scope.digitalClock = 'Current time: ' + now.toLocaleTimeString() + ' on ' + now.toLocaleDateString(undefined, options);
    };
    $interval($scope.displayTime, 500);

    // Analog clock
    var canvas = document.getElementById("analog-clock");
    var ctx = canvas.getContext("2d");
    var radius = canvas.height / 2;
    ctx.translate(radius, radius);
    radius = radius * 0.90;
    $interval(drawClock, 1000);

    function drawClock() {
        drawFace(ctx, radius);
        drawNumbers(ctx, radius);
        drawTime(ctx, radius);
    }
});


```

Below is the jQuery code.

```js
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
```

+ Two public Web APIs integration ​

Integrated the jokeAPI from ([https://v2.jokeapi.dev/joke/Any](https://v2.jokeapi.dev/joke/Any). This displays any category of joke in my page every 1 minute. Below is the code of this api.

```js
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

```

Integrated the weatherAPI from [https://www.weatherbit.io](https://www.weatherbit.io). This display the current weather of a city that the user entered. 

Below is the code of this api.

```js
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

```

Finally, I implemented the javascript cookies to remember the client. This displays "Welcome to my homepage!", if it first-time visit. Else it displays "Welcome back! Your last visit was <the date/time of last visit>".

Below is the code of this functionality.

```js
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
    
```

This is screenshot of my home page showing all these functionalities.

![screenshot5.png](/images/P1screenshot5.png)

