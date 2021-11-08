//get the current date
const today = new Date();
console.log(today);
//retunr the current ay in number form
const dayNumber = today.getDay();
console.log(dayNumber);
//storing my output location
const element = document.getElementById("message1")

function special() {
    if (dayNumber == 1) {
        return `1/2 off all oils`;
    } else if (dayNumber == 2) {
        return `2-for-1 treats`;
    } else if (dayNumber == 3) {
        return `Buy-one-Get-one Free day`;
    } else if (dayNumber == 4) {
        return `Add a gummy`;
    } else if (dayNumber == 5) {
        return `Bring a friend get a extra treat`;
    } else if (dayNumber == 6) {
        return `Buy two edibles get one free`;
    } else if (dayNumber == 7) {
        return `Brunch and free samples`;
    } else (element.classList.add('hideme'))
}
console.log(`You got a ` + special());
element.innerHTML = `Check out the Special today 👀` + `</br>` + special();


function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80 && score < 90) {
        return `B`;
    } else if (score > 70 && score < 80) {
        return `C`;
    } else if (score > 60 && score < 70) {
        return `D`;
    } else {
        return `F`;
    }
}
console.log (`You got a ` + assignGrade(95));
console.log (`You got a ` + assignGrade(68));
console.log (`You got a ` + assignGrade(22));




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

// for (var i=0; i<=20; i++) {
//     if(i % 2 ===0) {
//         console.log(i + `is even`)
//     } else {
//         console.log(i + `is odd`)
//     }
// }