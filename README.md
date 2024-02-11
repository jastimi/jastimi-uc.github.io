# WAPH-Web Application Programming and Hacking
## Instructor: Dr. Phu Phung

# Individual Project 1
## Front-end Web Development with a Professional Profile Website on github.io cloud service

## Overview and Requirements 

In this project, you will expand front-end web development skills by developing a Professional Profile Website and deploying it on `github.io` cloud service. This project has general, non-technical, and technical requirements with grade distributions as follows.

### General requirements (30 pts): 

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

+ Create and deploy a personal website on GitHub cloud (github.io) as a professional profile with your resume, including your name, headshot, contact information, background, e.g., education, your experiences and skills (25 pts).
 ​
+ Create a link to a new HTML page to introduce this "Web Application Programming and Hacking" course and related hands-on projects (5 pts)
 ​
### Non-technical requirements (20 pts)​

+ Use an open-source CSS template or framework such as Bootstrap​

_Target this profile for your potential employer, and your page will be graded as a part of your job application​_


Used the page tracker [https://analytics](https://analytics.withgoogle.com/)]

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

+ Include a page tracker, for example: [https://analytics](https://analytics.withgoogle.com/)](https://analytics.withgoogle.com/), [https://flagcounter.com/](https://flagcounter.com/).

### Technical requirements (50 pts)​

#### Basic JavaScript code (20 pts)​

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

+ Use jQuery and one more open-source JavaScript framework/library​ to implement JavaScript code introduced in Lab 2, including, a digital clock; an analog clock; show/hide your email; and one more functionality of your choice. **(5 pts each)**

+ Two public Web APIs integration (20 pts)​

1. Integrate the jokeAPI ([https://v2.jokeapi.dev/joke/Any](https://v2.jokeapi.dev/joke/Any), similar to Lab 2.2.d.i) with Any category of joke to display a new joke in your page every 1 minute

2. Integrate a public API with graphics. Examples: [https://xkcd.com/info.0.json](https://xkcd.com/info.0.json), [https://www.weatherbit.io](https://www.weatherbit.io).

+ Use JavaScript cookies to remember the client (10 pts): If first-time visit, display a message "Welcome to my homepage!", otherwise, display a message "Welcome back! Your last visit was <the date/time of last visit>"


## Report

You can write a report using Markdown format or any Word processor, i.e., you do not need to use Markdown to write your report. Your report should follow the template/outline provided in Lecture 2 ([https://github.com/phungph-uc/waph/blob/main/README-template.md](https://github.com/phungph-uc/waph/blob/main/README-template.md)) which should include the course name and instructor, your name and email together with your headshot (150x150 pixels), and sub-sections of the assignment's overview, and each task and sub-task.

There should be an overview sub-section where you must write an overview of the assignment and the outcomes you learned from it. Include your website's clickable URL deployed on `github.io`. Also, include a direct clickable link to the project folder on GitHub.com so that it can be viewed when grading, for example, [https://github.com/phungph-uc/waph-phungph/tree/main/individual-project1](https://github.com/phungph-uc/waph-phungph/tree/main/individual-project1).

For each sub-task, write a brief summary of how you complete it. You are welcome to include code snippets and screenshots to demonstrate the outcome, however, they are not required. **Please note that demo screenshots must include your virtual machine name or your name with proper captions and be visible, i.e., in high resolution, not too blurry or with much blank space, for grading**. 

Your report must be exported in  PDF with contents and screenshots are correctly rendered in proper order. The PDF file should be named `your-username-waph-project1.pdf`, e.g., `phungph-waph-project1.pdf`, and uploaded to Canvas to submit by the deadline. 


## Deliverables and Submission

You need to submit **three** deliverables in PDF files for grading:

+ Your report mentioned above.

+ Your deployed website printed from a browser in PDF.

+  The source code of your deployed website printed from a browser in PDF.
