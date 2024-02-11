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