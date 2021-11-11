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
document.getElementById("message1").innerHTML=(`⭐Today's  special⭐ </br> ${day}`);
console.log("Today us "+ day);
//Daily Specials ends here




// Array Assignments //Create an Array called "donuts" that list 7-10 different items
//  var donuts=[`Glaze`, `Chocolate`, `Sprinkles`, `Strawberry`, `Vainilla`, `Naked`, `Sugar`, `Powered`, `Jelly`, `Sugar`];
//   console.log(donuts);
//1 Using a loop, iterate through this array and console.log all the donuts
    // for(i=6; i<donuts; i++) {
    // console.log(donuts)[i];
    // }
//2 Write the command to remove the first donut fron the array
    // donuts.shift();
//3 Write the command to remove the last donuts from the array
    // donuts.pop ();
//4 Write the command to add a new donut "lime zest" to the front of the array
    // donuts.unshift(`lime zest`);
//5 Write the command to add another donut "lemon pie" to the end of the array
    // donuts.push(`Lemom Pie`);
//6 Use either the join() or toString() method to convert an array to a string.
    // const donuts=[`Glaze`, `Chocolate`, `Sprinkles`, `Strawberry`, `Vainilla`, `Naked`, `Sugar`, `Powered`, `Jelly`, `Sugar`];
    // console.log(donuts.join('-'));
//7 Write the command to make a copy of the array using slice. The copy should NOT include two donuts.
    // const donuts=[`Glaze`, `Chocolate`, `Sprinkles`, `Strawberry`, `Vainilla`, `Naked`, `Sugar`, `Powered`, `Jelly`, `Sugar`];
    // console.log(donuts.slice(2));
//8 Write the command that gives the indexOf where "chocolate" is located.
    // console.log(donuts.indexOf(`Chocolate`));
//9 Write the command that gives the indexOf where "glazed" is located (You may get a negative number).
    // console.log(donuts.indexOf(`glazed`));
//10 **Using the splice method, remove one donut from the array and add another.
    // const donuts=[`Glaze`, `Chocolate`, `Sprinkles`, `Strawberry`, `Vainilla`, `Naked`, `Sugar`, `Powered`, `Jelly`, `Sugar`];
    // donuts.splice(2, 1, `Cinnamon`);
    // console.log(donuts);
//11 **Create a new variable called withSyed and set it equal to the people array concatenated with the string of "Bob".
  //I still need to work on this answer//
    // let withSyed = people.concat("Bob");
//12 **Create a function called getdonuts() that will display all the donuts in your array and display on your page.
    








