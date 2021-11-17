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
function display() {
  var place = document.getElementById("submit");

  for (value in corvett) {
    place.innerHTML = "Make: " + corvett.make + "<br>" +
      "Model: " + corvett.model + "<br>" +
      "Year: " + corvett.year + "<br>" +
      "Available: " + corvett.available + "<br>" +
      "Description: " + corvett.description;
  };
}
// function clear() {
//   var place = document.getElementById("clear");
//   place.innerHTML = "see details";
// };

var maclaren = {
  make: "Maclaren",
  model: "GT",
  year: 2022,
  available: true,
  description: "Luxury Sport Car Ever!"
}
function display2() {
  var place2 = document.getElementById("submit2");

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
function display3() {
  var place3 = document.getElementById("submit3");

  for (value in cadillac) {
    place3.innerHTML = "Make: " + cadillac.make + "<br>" +
      "Model: " + cadillac.model + "<br>" +
      "Year: " + cadillac.year + "<br>" +
      "Available: " + cadillac.available + "<br>" +
      "Description: " + cadillac.description;
  };
}

//cars endss here

//classwork 11-16

//create two objects
//one with your current pet
var princess= {
  name: "Princess",
  age: 2,
  type: "french poodle",
  color: "white",
  friendly: false,
  alive: true,
}
//one with past pet
var chico= {
  name:"Chico",
  age: 1,
  type: "Rabbit",
  color: "Gray",
  friendly: true,
  alive: false
};
//set a method to output my object (a function)
function describePet(pet) {
  console.log(`This dog is ${pet.age} years ols, My dog's name is ${pet.name} Is she friendly? ${pet.friendly}`);
}
describePet (princess);
describePet (chico);

//This is th constructor function - need to start with a capital letter
// function Movie(tittle, year, genre, cast) { //keys inside the ()
// this.tittle= tittle; //this. refereing to movie
// this.year= year;
// this.genre= genre;
// this.cast= [cast];
// }

// //method on the object //function within an object// this only for objects protectors
// Movie.prototype.read= function() {
// document.getElementById("movie1").innerHTML= 
// "Tittle " + this.tittle + "</br>" +
// "Year " + this.year + "</br>" +
// "Genre "+ this.genre + "</br>" +
// "Cast " + this.cast;

// document.getElementById("movie2").innerHTML= 
// "Tittle " + this.tittle + "</br>" +
// "Year " + this.year + "</br>" +
// "Genre "+ this.genre + "</br>" +
// "Cast " + this.cast;

// document.getElementById("movie3").innerHTML= 
// "Tittle " + this.tittle + "</br>" +
// "Year " + this.year + "</br>" +
// "Genre "+ this.genre + "</br>" +
// "Cast " + this.cast;
// }

// //Initiate a new object
// var movie1= new Movie(" Toys Story", 1995, "Family", ["Woody", "Buzzlighter"])
// movie1.read();
// var movie2= new Movie("Matilda", 1996, "Family", ["Mara Wilson", "Danny DeVito"])
// movie2.read();
// var movie3= new Movie("Monsters inc", 2001, "Family", ["Sally", "Mike", "Boo"])
// movie3.read();

//created a new constructor function favorite artist
//minumiun 5 keys values pairs
function Artist(name, genre, group, album, song) { 
  this.name= name; 
  this.genre= genre;
  this.group= group;
  this.album= album;
  this.song= [song];
  }

//created a method 
Artist.prototype.read= function() {
  document.getElementById("artist").innerHTML= 
  "Name " + this.name + "</br>" +
  "Genre " + this.genre + "</br>" +
  "Group "+ this.group + "</br>" +
  "Album" + this.album + "</br>" +
  "Song" + this.song;
}
//initiate a new instance
var artist= new Artist("Backstreet Boys", "Pop", "no", "Millenium", ["I Want It That Way", "Everybody"])
artist.read();





















//The Reading List starts here
//Create an array of objects, where each object describes a book and has properties for the title(a string), author(a string), and alreadyRead(a boolean indicating if you read it yet).
//Iterate through the array of books.For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// var book = [
//   {tittle: "Rich Dad Poor Dad",
//   author: "April",
//   alreadyRead: true
// },
// {tittle: "The power of Now",
// author: "Luz S",
// alreadyRead: true
// }
// {tittle: "The Mermaid",
// author: "Disney",
// alreadyRead: false
// },
// ]:

// //Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
// for (i=0; i<books.length; i++) {
//   var book= books [i];
//   var bookInfo= book.tittle + ' by ' + book.author;
//   If (book.alreadyRead) {
//     document.write ( ' You read ' + bookInfo);
//   }
//   else {
//     document.write (' You still need to check out' + bookInfo + '<br>');
//   }
