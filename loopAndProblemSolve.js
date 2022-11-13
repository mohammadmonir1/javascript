// while_loop
var num = 15;
while(num <=20){
    // console.log(num);
    num++;
}

// for_loop
for (i = 15; i <= 20; i++){
    // console.log(i)
}

var num = [14, 13, 24, 15, 25, 15, 21,26, 30];
for(var i = 0; i < num.length; i++){
    var element = num[i];
    // console.log(element)
}

// swithsn and break

num =  100;
switch(num){
    case 1000:
        // console.log("I am 1000");
        break;
    case 100:
        // console.log("I am 100");
        break;
    case 50:
        // console.log("I am 10");
        break;
    case 20:
    case 10:
        // console.log("I am 10 or 20");
        break;
    default:
        // console.log("I don't know who are you");
        
}
// Function
function sayLove(){
    // console.log("I love You");
    // console.log("Will You marry me?");
}
sayLove()

function doubleIt(num){
    var result = num * 2;
    // console.log(result);
}
doubleIt(5)

function doubleIt(num){
    var result = num * 2;
    return result;
}

var first = doubleIt(5);
var second = doubleIt(10);
var total = first + second;
// console.log(total);


function add (num1, num2){
    var result =  num1 + num2;
    return result;
}
var sum = add(40, 50);
// console.log(sum)


// object and Property
var student1 = {name:"Monir", Phone: 6469, Id: 159};
var student2 = {name:"sohan", Phone: 6569, Id: 160};
// console.log(student1)
var Phone = student2.Phone;
// console.log(Phone);
var Phone = student2["Phone"];
// console.log(Phone);
var phonePropName = "Phone";
var phone1 = student2[phonePropName];
// console.log(phone1);

// add new element in arry

student2.Phone = 7376436;
// console.log(student2)
student2["Phone"] = 66556576;
// console.log(student2);
student2[phonePropName] = 873482648266;
// console.log(student2)

// added new property
student2.Movie = "Ertugrul";
// console.log(student2)
student2["Movie"] = "Ertugrul";
// console.log(student2);
var student2Movie = "Ertugrul";
var student2 = student2 [student2Movie];
// console.log(student2);

// inch to feet

function inchToFeet(inch){
    var feet = inch / 12;
    return feet;
}
var result = inchToFeet(144);
// console.log(result)

var senior = [156, 288, 300];
for (var i = 0; i < senior.length; i++){
    var sum = senior[i];
    // console.log(sum / 12)
}

// About Let and Const
// let = jodi kono varriable er man poriborton hoy taholse sekhane let hobe,,,
// const = jodi kono varriable er man poriborton na hoy taholse sekhane let hobe,,,

// Leap year

// const year = 2027;
// let reminder = year / 4;

//  if(reminder = 0){
    // console.log("You are a leap year");
    
// }
// else{
    // console.log("You are not leap year")
//  }

// const year = 2024;
// const reminder = (year % 100 === 0) ? (year % 400 === 0): (year % 4 === 0);

// if(reminder){
    // console.log("This is Leap Year");
// }
// else{
    // console.log("This is not leap year")
// }

// functio use kore
function isLeapYear(year){
    const reminder = (year % 100 === 0) ? (year % 400 === 0): (year % 4 === 0);
    if (reminder){
        return true;
    }else{
        return false
    }

}
var result = isLeapYear(2024);
// console.log(result)

// Factorial
// emample = 1*1*2*3*4*5*6*7*8*9*10
// var factorial= 1;
// for (var i = 1; i <= 10; i++){
    // factorial = factorial* i;
    // console.log(i, factorial)
// }
// use function
function factorial (n){
    var factorial = 1;
    for (var i = 1; i <= n; i++){
        factorial = factorial * i;
    }
    return factorial;
}
var result = factorial(10);
// console.log(result)


// while loop
// var i = 1;
// var factorial = 1;
// while (i<=10){
//     factorial = factorial * i;
//     // console.log(i, factorial)
//     i++;
// }
// console.log(factorial)

// while loop with function

function factorial(n){
    var i = 1;
    var factorial = 1;
while (i <= n){
    factorial = factorial * i;
    // console.log(i, factorial)
    i++;
    }
    return factorial
}
var result = factorial(10);
// console.log(result)


// factorial wih recursive

function factorial(n){
    if ( n == 0){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
var result = factorial(10);
// console.log(result)