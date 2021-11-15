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