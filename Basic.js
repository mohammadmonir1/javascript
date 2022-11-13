var mango = 14;
// console.log(typeof mango);

var ami = "monir";
// console.log(typeof ami);

var isHot = true;
// console.log(isHot);

var isRich = false;
// console.log(isRich)

var promise = "I never go alone without you";
// console.log(promise.toUpperCase());
// console.log(promise.toLocaleLowerCase());
// console.log(promise.indexOf("go"));
// console.log(promise.split("I"));

// JavaScript Jog
var number = 25;
var number1 = 15.5;
// console.log(number + number1);

var number = 25;
var number1 = "15.5";
number1 = parseFloat(number1);
// console.log(number + number1)

var number = 25;
var number1 = "15.5";
number1 = parseInt(number1);
// console.log(number + number1)

var number1 = 15;
var number2 = 15.5;
number1 = "" + number1;
// console.log(number1);

var number = 0.1;
var number1 = 0.2;
var total = number + number1;
total = total.toFixed(2);
// console.log(total)

var price = 30;
var price1 = 40
var total = price + price1;
// console.log(total)
// aikhane jog biyog gun vag kora jabe

var price = 30;
var price1 = 40
// price = price + 2
price++
var total = price + price1;
// console.log(total)

var ami = "mohammad";
var ami1 = "Monir"
var total = ami + " " + ami1;
// console.log(total);

var num = 3.2345;
// var Number = Math.abs(num);
// var Number = Math.round(num);
// var Number = Math.floor(num);
// var Number = Math.ceil(num);
// console.log(Number)

var number = Math.random() * 5;
// var result = number;
var result = Math.round(number);
// console.log(result);




// JavaScript condition 

var biscuitPrice = 9;
if( biscuitPrice < 10){
    // console.log("I will Eat it")
}
else{
    // console.log("I will not eat it.")
}

var jobPaiso = false;
var savings = 500000;
if(jobPaiso == true && savings > 100000){
    // console.log("You are ready for sadi");
}
else if(jobPaiso == true){
    // console.log("Kichudin Pore Kotha Bolbhi")
}
else{
    // console.log("Tor kopale biya nai")
}


var date = new Date();
// console.log(date);
var date = new Date("2022-11-11");
// console.log(date)



// Javascript Array

var friendsAgee= [14, 13, 24, 15, 25, 15, 21,26, 30];
var tamim = friendsAgee[3];
// console.log(tamim)

friendsAgee[2] = 34;
// console.log(friendsAgee)
var position = friendsAgee.indexOf(25);
// console.log(position)
// console.log (friendsAgee[0])
var noPosition = friendsAgee.indexOf(141);
// console.log(noPosition)
friendsAgee.push(29);
// console.log(friendsAgee)
// console.log(friendsAgee.length)
friendsAgee.pop();
// console.log(friendsAgee);
friendsAgee.shift();
// console.log(friendsAgee)
friendsAgee.unshift(14);
// console.log(friendsAgee)
delete friendsAgee[2];
// console.log(friendsAgee)
friendsAgee.slice(2, 4);
// console.log(friendsAgee)