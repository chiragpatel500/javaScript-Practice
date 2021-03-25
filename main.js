// Epic 1 javaScript Basics
// JavaScript Basics Exercises

// Writing expressions with variables
// EX 1
var myName = "Chirag Patel";
console.log(myName);

// EX 2
var chiragAge = 25;
console.log(chiragAge);

// Ex 3
var juliAge = 32;
var ageDiff = chiragAge - juliAge;
console.log(ageDiff);

// Writing code with conditionals
// EX 4
if (chiragAge > 21) {
    console.log(myName + " You are older than 21");    
} else {
    console.log(myName + " You are not older than 21");
};

// EX 5
if (chiragAge === juliAge) {
    console.log("chirag have the same age as Julia");
} else if (chiragAge > juliAge ){
    console.log("Julia is younger than you chirag");
} else if (chiragAge < juliAge) {
    console.log("julia is older than you chirag");
} else {
    console.log("all out");
};


// JavaScript Array

// Sorting an Array
// Ex1

var cabTeam = ["chirag", "lucas", "ottavia", "moe", "odeb", "laura"];
// alphabetical sorting
cabTeam.sort();
console.log(cabTeam[0]);
console.log(cabTeam[5]);
console.log(cabTeam);

// EX 2
// Looping over an Array





