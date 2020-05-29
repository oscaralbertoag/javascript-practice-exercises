// WARM UP EXERCISE WORKSHEET 1
// Solve all problems. Sometimes a particular problem may have more than 1 correct answer. 
// Problems can also build on previous problems.

// 1) Create an array (store it in a new variable) and push these numbers to the array: 2,4,6,8,10
const arr1 = [2,4,6,8,10];

// 2) Access the 5th element in the array created in step 1 and store it in a new variable
const fifth = arr1[4];

// 3) Replace the 4th element in the array created in step 1 with the number 27
arr1[3] = 27;

// 4) Store the array's size in a new variable
const arrSize = arr1.size;

// 5) Iterate over the array created in step 1 and print out each element
arr1.forEach(element => console.log(element));

// 6) Create a new array of size 10 filled with zeroes
const arr2 = Array(10).fill(0);

// 7) Create a string with your first name and store it in a variable
const firstName = "Juan";

// 8) Create a string with your last name and store it in a variable
const lastName = "Perez";

// 9) Concatenate the strings from steps 7 & 8 and store the result in a new variable. Don't forget to add a space between first and last name. Do not use string interpolation.
const fullName = firstName + " " +  lastName;

// 10) Do the same as step 9, but use string interpolation.
const fullNameInterpolation = `${firstName} ${lastName}`;

// 11) Create a function that takes two strings as arguments (first, last) and and returns a string in the format:
// "Hello, Jon Snow, how are you today?" when first is "Jon" and last is "Snow"
function greet(first, last) {
    return `Hello, ${first} ${last}, how are you today?`;
}

// 12) Create a function that takes two strings as arguments (first, last) and and prints a string in the format:
// "Hello, Jon Snow, how are you today?" when first is "Jon" and last is "Snow"
function greeting(first, last) {
    console.log(`Hello, ${first} ${last}, how are you today?`);
}

// 13) Store the length of string "pneumonoultramicroscopicsilicovolcanoconiosis" in a new variable
const stringLength = "pneumonoultramicroscopicsilicovolcanoconiosis".length;


// 15) Create a function that takes two numbers as parameters and returns their sum
function sum(a, b) {
    return a + b;
}

// 16) Create a function that takes two numbers as parameters and returns the difference
function difference(a, b) {
    return a - b;
}

// 17) Create a function that takes two numbers as parameters and returns the result of dividing the first parameter by the second parameter
function divide(a, b) {
    return a/b;
}

// 18) Create a function that takes two numbers as parameters and returns the result of multiplying them
function multiply(a, b) {
    return a * b;
}

// 19) Create a function that takes two numbers as parameters and returns the remainder after dividing the first by the second
function remainder(a, b) {
    return a % b;
}

// 20) Create a function that takes 1 parameter and prints the type of the parameter (e.g. for "hi" it would print "String")
function type(a) {
    console.log(typeof a);
}

// 21) Create a method that takes 2 numbers as parameters (base & height) and calculates the area of a triangle
function calculateTriangleArea(base, height) {
    return base * height / 2;
}

// 22) Create a method that takes 2 numbers as parameters (base & height) and calculates the area of a triangle, but this time use the methods created in 17 & 18 to calculate your result
function calculateTriangleArea2(base, height) {
    return divide(multiply(base, height), 2);
}

// 23) Create a Map to map a person's name to their age (e.g. "Jon" maps to 23, "Mary" maps to 25, etc). Create at least 5 entries
const people = new Map();
people.set('Jon', 23);
people.set('Mary', 25);

// 24) Iterate over all elements of the Map from 23 and print a line in the following format for each key-value pair:
// "Key:Mary, Value:25"
people.forEach((key, value) => console.log(`Key:${key}, Value:${value}`));

// 27) Create an array and add 5 strings. The strings can be whatever you want
const strArr = ["a", "b", "c", "d", "e"];

// 28) Iterate over the array created in 27 and print each string
strArr.forEach(element => console.log(element));

// 29) Iterate over the array created in 27 and print each string. Use a while loop to do the iteration
let counter = 0;
while (counter < strArr.length) {
    console.log(strArr[counter++]);
}

// 30) Create a method that takes 1 parameter and returns a boolean value. It will return true if the parameter is a string, false otherwise
function isString(a) {
    return typeof a === "string";
}

// 31) Create a method that takes 1 parameter and returns a boolean value. It will return true if the parameter is a number, false otherwise
function isNumber(a) {
    return typeof a === "number";
}

// 32) Create a method that takes 1 boolean parameter called 'hungry' and prints "Not hungry" when the argument is false, and prints "Very hungry" when the argument is true. Use the ternary operator.
function printHungerLevel(hungry) {
    console.log(hungry ? "Very hungry" : "Not hungry");
}

// 33) Usa a while loop to print "Are we there yet?!!" 10 times
counter = 0;
while (counter < 10) {
    console.log("Are we there yet?!!");
    counter++;
}

// 34) Create a method that takes a number as a parameter and uses a while loop to print "Are we there yet?!!" n times, where n is the number of times the statement will be printed. For example, when n = 5, it will print "Are we there yet?!!" five times.
function areWeThereYet(n) {
    counter = 0;
    while (counter < n) {
        console.log("Are we there yet?!!");
        counter++;
    }
}

// 35) Create a method that takes two numbers as parameters and calculates the area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width;
}

// 36) Create a method that takes two numbers as parameters and calculates the area of a rectangle, but this time use the method you created in 18 to perform the calculation
function calculates(length, width) {
    return multiply(length, width);
}

// 37) Given any string, use the ternary operator to print "Yes" or "No" whenever the string contains the letter 'a'
// For example, your statement should print "Yes" for "Hola" and "No" for "Hi"
function containsA(word) {
    return word.includes("a");
}

// 39) Create a method that takes 1 parameter called 'total' (float) , calculates a 20% tip, and returns it.
function calculateTwentyPercentTip(total) {
    return (100 - 20)/100 * total;
}

