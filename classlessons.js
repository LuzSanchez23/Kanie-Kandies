//specials 1st lesson starts here
// //get the current date
const today = new Date();
console.log(today);
// //retunr the current ay in number form
const dayNumber = today.getDay();
console.log(dayNumber);
// //storing my output location
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
//specials 1st lesson ends here


//Grading lesson starts here
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
//Grading lesson endss here

//Even and Odd lesson starts here
for (var i=0; i<=20; i++) {
    if(i % 2 ===0) {
        console.log(i + `is even`)
    } else {
        console.log(i + `is odd`)
    }
}
//Even and Odd lesson starts here

//Arrays lessons starts here
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
//Arrays lessons ends here
