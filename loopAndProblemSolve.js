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

// fibonacchi

var fibo = [ 0, 1];
for ( var i = 2; i <= 12; i++){
       fibo[i] = fibo[i-1] + fibo[i-2];
 }
// console.log(fibo)

// use function'

function fibonacchi(n){
     var fibo = [0.1];
    for ( var i = 2; i <= n; i++){
         fibo[i] = fibo[i-1] + fibo[i-2];
         return fibo;
    }
 }
    
var result = fibonacchi(15);
// console.log(result)

// fibonacchi recursive
 function fibonacchi(n){
     if (n==0){
         return 0;
     }if(n==1){
        return 1;
     }else{
        return fibonacchi(n-1) + fibonacchi(n-2);
     }
 }
 var result = fibonacchi(10);
// console.log(result)


// fibonacchi in recursive way

function fibonacchi(n){
    if(n == 0){
        return [0];
    }
    if(n == 1){
        return [0,1];
    }
    else{
        var fibo = fibonacchi(n-1);
        var nextElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextElement);
        return fibo;
    }
}
var result = fibonacchi(10);
// console.log(result)


// moulik sonkha

var n = 15;
for ( i = 2; i < n; i++){
    // console.log(i, n % 1)
    if(n % i == 0){
        // console.log("Not Prime");
        break;
    }
    
}
// console.log("Prime Number")

// use function

function isPrime(n){
   for ( i = 2; i < n; i++){
    if(n % i ==0){
        return 'not Prime'
    }
   }
   return 'Prime number'
}
var result = isPrime(128);
// console.log(result)




// swap----odolbodol
// var a = 5;
// var b = 7;
// console.log("Before: a=",a "b=",b);
// var temp = a
// a=b
// b=temp
// console.log("After: a=",a "b=",b);

// p=5;
// q=7
// [p,q] = [q,p];
// console.log("After Swap: p=p, q=q")


// random Number

for (var i =0; i<1; i++){
    var randomNumber = Math.random()*6;
    var output = Math.round(randomNumber);
    // console.log(output)
}


// find maxim number two or three values;

var business = 850;
var minister = 6950;
var sochib = 7950;
// if(business > minister){
//     if(business > sochib) {

//     // console.log("Business Man is Big");
// }
// else{
//     // console.log("Sochib Is big");
// }
// }
// else{
//     // if(minister > sochib){
//         console.log("Minister is Big");
//     }
//     else{
//         // console.log("sochib is big")
//     }
// }

var maximum = Math.max(business , minister,sochib)
// console.log(maximum)


// Array Maximum
var marks = [78,34,23,45,57,89,65,67,34,57,87,35,57,68];
 var max = marks[0];
 for(var i = 0; i< marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element
    }
 }
//  console.log("Higher value is:", max)

// Array Sum

var sum = 0;
for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    sum = sum + element
}
// console.log("Total of the Number: ", sum)


function getArraySum(number){
    for(var i = 0; i < marks.length; i++){
        var element = marks[i];
        sum = sum + element
    }
    return sum;
}
var marks = [78,34,23,45,57,89,65,67,34,57,87,35,57,68];
var result = getArraySum(marks);
// console.log(result)


// remove duplicate from array

var numb = [78,34,23,45, 45,57,89,65, 65,67,34,57,87,35,57,68];
var uniqueName= [];
for(var i = 0; i < numb.length; i++){
    var element = numb[i];
    var index = uniqueName.indexOf[element];
    if (index = -1){
        uniqueName.push(element)
    }
}
// console.log(uniqueName)

// word Count
var speech = "I am a good student. I am kutukutu";
var count = 0;
for(var i= 0; i<speech.length; i++){
    var char = speech[i];
    if (char == " " && speech [i-1] !=" "){
        count++;
    }
}
count++
// console.log(count)

// reserve string-strinh ke ulto kore dekhabe

function reserveString(str){
    var reserve = "";
    for(var i = 0; i< str.length; i++){
        var char = str[i];
        reserve = char + reserve;
    }
    return reserve
}
var statement = "Hello Alien Bhai";
var forAlien = reserveString(statement);
// console.log(forAlien)