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


