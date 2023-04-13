/* 
let js = "amazing";

let firstName = "Jonas";
let calculation = 40 + 8 + 23 - 10;
let number = 23;
let PI = 3.1415;

console.log(firstName);
console.log(calculation);
console.log(number);
console.log(PI);

//comment in JS

-----------------------------------------------------

let javascriptIsFun = true; // declared new variable
console.log(true);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "Yes!"; //changing the value of the variable
console.log(typeof javascriptIsFun);
// dynamic typing

let year;
console.log(year);
console.log(typeof year);
// value and type of value is undefined

console.log(typeof null);
//should return null as it is not an object

-----------------------------------------------------

let age = 30;
age = 31; //mutable

const birthYear = 2000;
// birthYear = 1990; //immutable

// const job; // need an init value

var job = "programmer";
job = "teacher";

lastName = "Bird"; //doesnt create a variable in scope - it makes a property on global scope
console.log(lastName);

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);

const firstName = "Nathan";
const lastName = "Bird";
console.log(firstName + " " + lastName);

// assignment operators
let x = 10 + 5; // x = 15
x += 10; // x = x + 10
x *= 4;
x++; // x = x + 1
x--;
console.log(x);

// comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018); // operation precedence

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y); // x and y both equal 10

const averageAge = (ageJonas + ageSarah) / 2;
console.log(averageAge);

-----------------------------------------------------
// String and Template literals

const firstName = "Nathan";
const job = "Software Dev";
const birthYear = 2000;
const year = 2023;

const nathan =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

console.log(nathan);

//using template literals

const nathanNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`; // can also use for a reugalr string
console.log(nathanNew);

console.log("string with \n multiple \n lines"); // older way
console.log(`String with
multiple
lines`);

-----------------------------------------------------
*/
//If and else statements

const age = 17;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`Sarah can start driving`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}
