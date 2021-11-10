function tellFortune() {
    var myarray = new Array("You will be rich but the end of the month", "You will be have 3 kids", "You will be skinny soon", "You will be married at the age of 35", "Your lucky numbers are 4, 5, 8, 1");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    //alert(random);
    document.getElementById("btn").innerHTML = random;
}