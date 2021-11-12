//objects starts here   
//object literall
const recipe={
  title: "mole",
  serving: 2,
  ingredients: [' Cinnamon', ' Cumin', ' Cocoa']
};
// var food=(`how to make ` ${recipe}["name"]);
// console.log(`${recipe.title}`)
// console.log(`serving: ${recipe.serving}`)
// console.log(`Ingredients: `)
// for(var i=0; i<recipe.ingredients.length; i++) {
//   console.log(`${recipe.ingredients[i]}`);
// };
document.getElementById('title').innerHTML='Title '+ recipe.title;
document.getElementById('servingSize').innerHTML='Serving: '+ recipe.serving;
document.getElementById('ingredients').innerHTML='Ingredients: '+ recipe.ingredients;



var sibling={
  name: "Alex",
  age: 37,
  single:true,
  children: ["Ashlei", "Jr", "Alinna", "Dominik"],
  order: "older",
};
sibling.single= false;
sibling.gender="male";
delete sibling.age;
var meeting= (`Hello I am ${sibling["name"]} I am ${sibling["age"]} years old Am I single ${sibling["single"]}`);
console.log(meeting);

// document.getElementById("uno").innerHTML=sibling.name;

//new keyword setting the values  
// var sibling=new Object();
// sibling.name="Alex";
// sibling.age=37;
// sibling.single= true;
// sibling.children=["Ashlei", "Jr", "Alinna", "Dominik"];
// sibling.order= "older";       
        
        




        //Daily Specials starts here
//         var day;
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
// document.getElementById("message1").innerHTML=(`⭐Today's  special⭐ </br> ${day}`);
// console.log("Today us "+ day);
//Daily Specials ends here

// const arrayCarousel = [
//   "images/img1.jpg",
//   "images/img2.jpg",
// ]
// counter = 0
// function setImage(){
//   document.getElementById("carousel-image").src = arrayCarousel[counter];
//   document.getElementById("carousel-image2").src = arrayCarousel[counter];
//   counter= (counter+1) % arrayCarousel.length;
// }
// setInterval(setImage, 2000);


// var choices = ['red', 'orange', 'pink', 'yellow'];
// for (var i = 0; i < choices.length; i++) {
//     console.log('My #' + (i + 1) + ' choice is ' + choices[i]);
// }
// for (var i = 0; i < choices.length; i++) {
//     var choiceNum = i + 1;
//     var choiceNumSuffix;
//     if (choiceNum == 1) {
//         choiceNumSuffix = 'st';
//     } else if (choiceNum == 2) {
//         choiceNumSuffix = 'nd';
//     } else if (choiceNum == 3) {
//         choiceNumSuffix = 'rd';
//     } else {
//         choiceNumSuffix = 'th';
//     }
//     console.log('My ' + choiceNum + choiceNumSuffix + ' choice is ' + choices[i]);
// }











