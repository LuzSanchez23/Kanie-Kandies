 //alerts message on the page
alert(`Hello!\nWelcome to Kanie Kandies🐶`)






// function getAge() {
//     var mes1 = prompt("What is your name?");
//     alert(`Hello ${mes1}`);
//     var yourAge = prompt('Please enter your age');
//     alert(`${yourAge}`);
//     // document.getElementById("demo-6").innerHTML= "Hello " + mes1;
// }
// getAge();

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

