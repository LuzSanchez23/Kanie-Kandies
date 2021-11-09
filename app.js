 //alerts message on the page
alert(`Hello!`);
// var yourAge = prompt("Please enter your age: ");

// if (yourAge <= 18)
//    alert("Users under the age of 18 unable to access this page")
//    window.location.href='https://www.google.com/';

// if (yourAge >= 18)
//     alert("Welcome to Kanie Kandies🐶")
//     window.location.href='https://luzsanchez23.github.io/Kanie-Kandies/';


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

