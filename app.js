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
    


// //aray literal - we assign the array to a variable
// const colors=[`brown`, `pink`, `blue` , `teal`, `red`]
// const myAges=[11, 15, 19, 30, 35]
// const compNums= [12>12, 9===`nine`, 1==2, `eight`===`EIGHT`, 5>=5]
// //using the JS keyboard build-in JavaScript methods new array()
// var colors= new Array(`brown`, `pink`, `blue`, `teal`, `red`);
// var MyAges= new Array(11, 15, 19, 30, 35);
// var compNums= new Array(12>12, 9===`nine`, 1==2, `eight`===`EIGHT`, 5>=5);
// //JS constructor method
// const colors=[];
// colors[0]=`brown`;
// colors[1]=`pink`;
// colors[2]=`blue`;
// colors[3]=`teal`;
// colors[4]=`red`;

//create an array of at least 7 of your classmate's names
// var classmates=[`Anna`, `Michael`, `Anthony`, `Lucas`, `Emily`, `Shelby`, `Sebastian`, `April`, `Aaron`, `Ali`]
// //access an Array
// console.log(classmates.length);
// //lopp over an array //for loop
// for(i=0; i<classmates.length; i++) {
//     console.log(classmates)[i];
// }
//Array Methods 
// classmates.push(`Ali`); //-push methods adds an item to the end of an array
// classmates.pop (); //pop method removes last item form an array
// classmates.unshift(`Ali`); //unshit method - adds an item to the beginning of an array
// classmates.shift(); //shift method - removes item from the top\
// classmates.splice(2,0, `Ali`); //splice method
// console.log(classmates.indexOf(`Ali`));







// var day;
// switch (new Date().getDay()) {
//     case 0:
//       day = "1/2 off all oils";
//       break;
//     case 1:
//       day = "2-for-1 treats";
//       break;
//     case 2:
//        day = "Buy-one-Get-one Free day";
//       break;
//     case 3:
//       day = "Add a gummy";
//       break;
//     case 4:
//       day = "Bring a friend get a extra treat";
//       break;
//     case 5:
//       day = "Buy two edibles get one free";
//       break;
//     case 6:
//       day = "`Brunch and free samples";
//   }
// document.getElementById("message1").innerHTML=(`Today is ${day}`);
// console.log("Today us "+ day);


 //alerts message on the page
// alert(`Hello!`);
// var yourAge = prompt("Please enter your age: ");
// var youAge();
//  if (yourAge <= 18){
//   alert("Users under the age of 18 unable to access this page")
//   location.href='https://www.google.com/';
//  }
// else if (yourAge >= 18)
//    alert("Welcome to Kanie Kandies🐶")
//    location.href="index.html";


function calculateDogAge() {
    var humanYear = document.getElementById("age").value;
    var realDogAge = humanYear * 7;
    document.getElementById("puppy").innerHTML = "Your doggie is " + realDogAge + " years old in human years!";
}
calculateDogAge();

function calculateHumanAge() {
    var dogYear = document.getElementById("ages").value;
    var realHumanAge = dogYear * 7;
    document.getElementById("human").innerHTML = "You will be " + realHumanAge + " years old in dog's years!";
}
calculateHumanAge();

