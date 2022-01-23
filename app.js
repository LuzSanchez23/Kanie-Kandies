//FORM STARTS HERE
console.log("JS is alive");

function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {

  var name = document.contactForm.name.value;
  var email = document.contactForm.email.value;
  var mobile = document.contactForm.mobile.value;
  //Define error variables with a default value
  var nameErr = emailErr = mobileErr = true;

  if (name == "") {
    printError("nameErr", "Please enter your full name");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(name) == false) {
      printError("nameErr", "please enter a valid full name");
    } else {
      printError("nameErr", "");
      nameErr = false;
    }

  }

  if (email == "") {
    printError("emailErr", "Please enter your email address");
  } else {
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) == false) {
      printError("emailErr", "please enter a valid email address");
    } else {
      printError("emailErr", "");
      emailErr = false;
    }
  }

  if (mobile == "") {
    printError("mobileErr", "Please enter your mobile number");
  } else {
    var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;;
    if (regex.test(mobile) == false) {
      printError("mobileErr", "please enter a valid 10 digits");
    } else {
      printError("mobileErr", "");
      mobileErr = false;
    }
  }

  if ((nameErr || emailErr || mobileErr) == true) {
    return false;
  } else {
    var dataPreview = "You've entered the following details: \n" +
      "First Name: " + name + "\n" +
      "Email Address: " + email + "\n" +
      "Mobile Number: " + mobile + "\n";

    alert(dataPreview);
  }
};
//FORM ENDS HERE

//Daily Specials starts here
var day;
switch (new Date().getDay()) {
  case 0:
    day = "1/2 off all oils";
    break;
  case 1:
    day = "2-for-1 treats";
    break;
  case 2:
    day = "Buy-one-Get-one Free day";
    break;
  case 3:
    day = "Add a gummy";
    break;
  case 4:
    day = "Bring a friend get a extra treat";
    break;
  case 5:
    day = "Buy two edibles get one free";
    break;
  case 6:
    day = "`Brunch and free samples";
}
document.getElementById("message1").innerHTML = (`⭐Today's  special⭐ </br> ${day}`);
console.log("Today us " + day);
//Daily Specials ends here

const arrayCarousel = [
  "img/pic2.jpg",
  "img/pic1.jpg",
  "img/img3.jpg",
  "img/img4.jpg",
];
counter = 0;

function setImage() {
  document.getElementById("carousel-image").src = arrayCarousel[counter];
  // document.getElementById("carousel-image2").src = arrayCarousel[counter];
  counter = (counter + 1) % arrayCarousel.length;
}
setInterval(setImage, 2000);

var smalldog = {
  oneQuarter: "1/4ml = 1.75mg",
  halfQuarter: "1/2ml = 3.5mg",
  thirdQuarter: "3/4ml = 5.25mg",
  fullQuarter: "1ml = 7mg",
}
function display1() {
  var place = document.getElementById("details1");

  for (value in smalldog) {
    place.innerHTML = "One Quarter: " + smalldog.oneQuarter + "<br>" +
      "Half Quarter: " + smalldog.halfQuarter + "<br>" +
      "Third Quarter: " + smalldog.thirdQuarter + "<br>" +
      "Full Quarter: " + smalldog.fullQuarter + "<br>";
  };
}

var mediumdog = {
  oneQuarter: "1/4ml = 4.25mg",
  halfQuarter: "1/2ml = 8.5mg",
  thirdQuarter: "3/4ml = 12.75mg",
  fullQuarter: "1ml = 17mg",
}
function display2() {
  var place = document.getElementById("details2");

  for (value in mediumdog) {
    place.innerHTML = "One Quarter: " + mediumdog.oneQuarter + "<br>" +
      "Half Quarter: " + mediumdog.halfQuarter + "<br>" +
      "Third Quarter: " + mediumdog.thirdQuarter + "<br>" +
      "Full Quarter: " + mediumdog.fullQuarter + "<br>";
  };
}

var largedog = {
  oneQuarter: "1/4ml = 6.75mg",
  halfQuarter: "1/2ml = 13.5mg",
  thirdQuarter: "3/4ml = 20.255mg",
  fullQuarter: "1ml = 27mg",
}
function display3() {
  var place = document.getElementById("details3");

  for (value in largedog) {
    place.innerHTML = "One Quarter: " + largedog.oneQuarter + "<br>" +
      "Half Quarter: " + largedog.halfQuarter + "<br>" +
      "Third Quarter: " + largedog.thirdQuarter + "<br>" +
      "Full Quarter: " + largedog.fullQuarter + "<br>";
  };
}

var giantdog = {
  oneQuarter: "1/4ml = 6.75mg",
  halfQuarter: "1/2ml = 13.5mg",
  thirdQuarter: "3/4ml = 20.255mg",
  fullQuarter: "1ml = 27mg",
}
function display4() {
  var place = document.getElementById("details4");

  for (value in giantdog) {
    place.innerHTML = "One Quarter: " + giantdog.oneQuarter + "<br>" +
      "Half Quarter: " + giantdog.halfQuarter + "<br>" +
      "Third Quarter: " + giantdog.thirdQuarter + "<br>" +
      "Full Quarter: " + giantdog.fullQuarter + "<br>";
  };
}
















