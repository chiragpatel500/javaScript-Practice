// // Epic 1 javaScript Basics
// // JavaScript Basics Exercises

// // Writing expressions with variables
// // EX 1
// var myName = "Chirag Patel";
// console.log(myName);

// // EX 2
// var chiragAge = 25;
// console.log(chiragAge);

// // Ex 3
// var juliAge = 32;
// var ageDiff = chiragAge - juliAge;
// console.log(ageDiff);

// // Writing code with conditionals
// // EX 4
// if (chiragAge > 21) {
//     console.log(myName + " You are older than 21");    
// } else {
//     console.log(myName + " You are not older than 21");
// };

// // EX 5
// if (chiragAge === juliAge) {
//     console.log("chirag have the same age as Julia");
// } else if (chiragAge > juliAge ){
//     console.log("Julia is younger than you chirag");
// } else if (chiragAge < juliAge) {
//     console.log("julia is older than you chirag");
// } else {
//     console.log("all out");
// };


// JavaScript Array

// Sorting an Array
// Ex1
// step 1: creating array
// var cabTeam = ["chirag", "lucas", "ottavia", "moe", "odeb", "laura"];
// step 2:sorting alphabetically and printing first and last names.
// cabTeam.sort();
// console.log(cabTeam[0]);
// console.log(cabTeam.[5]);
// step 3:using for loop to print all the names.
// for (var index = 0; index < cabTeam.length; index++){
//     console.log(cabTeam[index]);
// };


// Looping over an Array
// EX 2
// // step:1 creating array with ages
// var ageArray = [25, 36, 45, 56, 65, 76];
// var i = 0;
// // step 2:iterate array using while loop and print all ages in console.
// while (i < ageArray.length) {
//     // print all the ages        Comment- console.log(ageArray[i]); to see even ages.
//     console.log(ageArray[i]);
//     i++;
// // step 3:add conditional inside while loop to print only even numbers.  
//     if (ageArray[i] % 2 === 0) {
//         console.log(ageArray[i]);
//     };
// };
// // step 4:write again a for loop instead and save file.
// for (var i = 0; i < ageArray.length; i++){
//     console.log(ageArray[i]);
// };


// // Functions that use Arrays
// // EX 3
// // step 1:write a fun that uses array as parameter and prints lowest number from array to the console.   
// var ageArray = [15, 25, 36, 45, 56, 65, 76];

// function lowestNumber(array) {
//     console.log(Math.min.apply(0,array));
// };
// lowestNumber(ageArray);

// // EX 4
// // step 1:write a fun that uses array as parameter and prints biggest number from to the console.
// var ageArray = [15, 25, 36, 45, 56, 65, 76];
// function biggestNumber(array) {
//     console.log(Math.max.apply(0,array));
// };
// biggestNumber(ageArray);

// // EX 5
// // step 1:write a fun that takes 2 parmeters array,index.
// // step 2:The function will print the value of the element at the given position (one-based) to the console. 
// // For example, given the following array and index, the function will print '6'
// var egArray = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
// var index = 1;
// function twoPara(array, index) {
//         console.log(array[index])
// };
// twoPara(egArray, index);

// // EX 6 : Attention required
// // step 1:write a function a that takes an array print the value that repeat;
// var dblArray = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];

// function findCopy(array) {
    
// };
// findCopy(dblArray);

// EX 7 : Attention required
// step 1:write a function to join all elements of the following array into a string.
// myColor = ["Red", "Green", "White", "Black"];

// function arrayJoin(array) {
//     console.log(array.join());
// }
// arrayJoin(myColor);

// JavaScript String
// EX 1
// step 1:Write a function that reverse a number.
// var x = 32443
// var dblArray = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
// function reverseNumber(num) {
// 	num = num + "";
//     console.log(num.split("").reverse().join(""));
// };
// reverseNumber(x);

// EX 2
// step 1:write a function that returns string on alphabetcial order.
// var x = 'webmaster';
// var a = 'chirag';
// function alphaOrder(string) {
//     console.log(string.split('').sort().join(''));
// }
// alphaOrder(x);

// EX 3: attention needed With For loop.
// Step 1:write a function that converts first letter of word to uppercase.
// x = "prince of persia";
// function upperCase(string) {
//     console.log(string.charAt(0).toUpperCase() + string.slice(1));
// };
// upperCase(x);
// EX 4
// step 1:write a function to print the longest the world in the sentence.
// x = "Web Development Tutorial";

// function longestWord(string) {
// }

// longestWord(x);
// Epic 2: DOM Manipulation
// EX 1
// EX 2

// Extra: Function exercises
// EX 1
// EX 2
// EX 3
// EX 4
// EX 5
// EX 6
// EX 7
// EX 8
// EX 9
// EX 10




