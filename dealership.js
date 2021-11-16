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

//cars starts here
var corvett = {
  make: "Corvett",
  model: "Z06",
  year: 2021,
  available: true,
  description: "Best Color Ever"
}
function display(){
  var place= document.getElementById("submit");

  for (value in corvett) {
    place.innerHTML = "Make: " + corvett.make + "<br>" +
    "Model: " + corvett.model + "<br>" +
    "Year: " + corvett.year + "<br>" +
    "Available: " + corvett.available + "<br>" +
    "Description: " + corvett.description;
  };
}

var maclaren = {
  make: "Maclaren",
  model: "GT",
  year: 2022,
  available: true,
  description: "Luxury Sport Car Ever!"
}
function display2(){
  var place2= document.getElementById("submit2");

  for (value in maclaren) {
    place2.innerHTML = "Make: " + maclaren.make + "<br>" +
    "Model: " + maclaren.model + "<br>" +
    "Year: " + maclaren.year + "<br>" +
    "Available: " + maclaren.available + "<br>" +
    "Description: " + maclaren.description;
  };
}

var cadillac = {
  make: "Cadillac",
  model: "Escalate",
  year: 2023,
  available: true,
  description: "Luxury Car Ever!"
}
function display3(){
  var place3= document.getElementById("submit3");

  for (value in cadillac) {
    place3.innerHTML = "Make: " + cadillac.make + "<br>" +
    "Model: " + cadillac.model + "<br>" +
    "Year: " + cadillac.year + "<br>" +
    "Available: " + cadillac.available + "<br>" +
    "Description: " + cadillac.description;
  };
}
//cars endss here