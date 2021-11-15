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

const recipe = {
      title: "Cookies",
      serving: 2,
      ingredients: [' Chocolate', ' Oats', ' Almond']
    };
    document.getElementById('title').innerHTML = 'CBD ' + recipe.title;
  document.getElementById('servingSize').innerHTML = 'Serving: ' + recipe.serving;
  document.getElementById('ingredients').innerHTML = 'Ingredients: ' + recipe.ingredients;
  
// const recipe = {
//   title: "Gummie",
//   serving: 2,
//   ingredients: [' Chocolate', ' Oats', ' Almond']
// };
// document.getElementById('title').innerHTML = 'CBD ' + recipe.title;
// document.getElementById('servingSize').innerHTML = 'Serving: ' + recipe.serving;
// document.getElementById('ingredients').innerHTML = 'Ingredients: ' + recipe.ingredients;














