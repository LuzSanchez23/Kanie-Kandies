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

//movies starts here
var toystory = {
  movie: "Toy Story",
  genre: "Children's Film",
  year: 1995,
  cast: "Woody & Buzz Lightyear"
}
function display() {
  var place = document.getElementById("details");
 
  for (value in toystory ) {
    place.innerHTML = "Movie: " + toystory.movie + "<br>" +
      "Genre: " + toystory.genre + "<br>" +
      "Year: " + toystory.year + "<br>" +
      "Cast: " + toystory.cast + "<br>";
  };
}
 

var matilda = {
  movie: "Matilda",
  genre: "Family Comedy",
  year: 1996,
  cast: "Matilda & Mr. Wormwood"
}
function display2() {
  var place2 = document.getElementById("details2");

  for (value in matilda) {
    place2.innerHTML = "Movie: " + matilda.movie + "<br>" +
      "Genre: " + matilda.genre + "<br>" +
      "Year: " + matilda.year + "<br>" +
      "Cast: " + matilda.cast + "<br>";
  };
}

var monstersinc = {
  movie: "Monsters Inc",
  genre: "Children's Film",
  year: 2001,
  cast: "Sullivan, Boo & Mike Wazowski"
}
function display3() {
  var place3 = document.getElementById("details3");

  for (value in monstersinc) {
    place3.innerHTML = "Movie: " + monstersinc.movie + "<br>" +
      "Genre: " + monstersinc.genre + "<br>" +
      "Year: " + monstersinc.year + "<br>" +
      "Cast: " + monstersinc.cast + "<br>";
  };
}

//movies endss here

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
// function Artist(name, genre, group, album, song) { 
//   this.name= name; 
//   this.genre= genre;
//   this.group= group;
//   this.album= album;
//   this.song= [song];
//   }

// //created a method 
// Artist.prototype.read= function() {
//   document.getElementById("artist").innerHTML= 
//   "Name " + this.name + "</br>" +
//   "Genre " + this.genre + "</br>" +
//   "Group "+ this.group + "</br>" +
//   "Album" + this.album + "</br>" +
//   "Song" + this.song;
// }
// //initiate a new instance
// var artist= new Artist("Backstreet Boys", "Pop", "no", "Millenium", ["I Want It That Way", "Everybody"])
// artist.read();





















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
