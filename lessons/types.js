/* 
Types - Data Types
-Strings 
-Numbers
- Booleans ( True or False)
*/

/* 
STRINGS:
- used to represent text
-use double/single quotes/backticks
*/

let striing1 = "double quotes";
// prettier-ignore
let string2 = 'single quotes'
let string3 = `backtick quotes`;

//STRING CONCATENATION
/* 
When you add 2 or more strings it will become a single string.
Strings will concatenate with any data type and result in a string.
*/

let greeting = "Good Morning";
let firstName = "Kevin";
console.log(greeting + " " + firstName);

// Solution using backticks to allow the space

let fullGreeting = `${greeting} ${firstName}`;
console.log("Full Greeting", fullGreeting);

// ! If you want to know type of something use TYPEOF

console.log(typeof firstName);

// To determine the size of a string use the length method
let animal = "horse";
console.log("animal size", animal.length);

// To reference a single letter you can use square brackets
// ! Remember it is zero based

console.log("first letter", animal[0]);

// If i wanted to grab the last letter
console.log("last lettter", animal[animal.length - 1]);

//Removing white space from a string using trim

let textData = "             Hello                ";
console.log("Trim example", textData.trim());

// Add a new line in the console

let paragraphString = "I went to the store today \nI bought eggs and milk.";
console.log(paragraphString);

// ! NUMBERS:

let currentTemp = 78;
console.log(typeof currentTemp);

//! Be Careful of mismatching strings and numbers

let myAge = 43;
let friendAge = "35";
console.log(myAge + friendAge); //result is a string

// You can convert a string to a number
// parseInt, Number(), or a plus sign.

//parseInt
console.log(myAge + parseInt(friendAge));

//Number
console.log(myAge + Number(friendAge));

//plus sign
console.log(myAge + +friendAge);

// ! Number Operators

/* 
Adding numbers (+)
subtracting (-)
multiply(*)
divide (/)

exponents (**)
Modulus (%) provides you with remainder
*/

console.log(3 ** 3);

//21 / 10 = remainder 1
console.log(21 % 10);

//even number example:

console.log(32 % 2);

//odd number example:

console.log(33 % 2);

//! Shopping Cart Example

let totalPrice = 0

let price1 = 10

totalPrice = totalPrice + price1;

let price2 = 15

totalPrice = totalPrice + price2

let price3 = 7

totalPrice += price3

console.log(totalPrice)


//! Funky Math

let funkyTotal = 0.1 + 0.2;
console.log(funkyTotal)

console.log("Fixed 2 digits", funkyTotal.toFixed(2));

let flooredNumber = 25.56
console.log("Floor Number", Math.floor(flooredNumber))
console.log("Floor to first decimal", (Math.floor(flooredNumber*10)) / 10)

// SLICE

console.log("blueberry".slice(0, 4))


// ! Boolean

let isOver21 = true;
let isLoggedIn = false;