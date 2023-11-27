// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
 //console.log(colors.push("indigo"))

// a) Your answer: It will log the array with indigo at the index
// b) Verify and explain: 5, this is the new length and if I want to see the array I should have logged colors and not push action

// --------------------1) What will this log?

const cohort = "LEARN 2023"
 //console.log(cohort.length)

// a) Your answer: It will log the Value
// b) Verify and explain: 10, there are 10 spots including the space and that is where the 10 comes into play.

// --------------------2) What will this log?

const greeting = "Hello World!"
 //console.log(greeting[4])

// a) Your answer: o  
// b) Verify and explain: o, Started counting from zero, H(0), E(1), L(2), L(3), O(4) 

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
 //console.log(languages[index])

// a) Your answer: It will log the array with index. Count the spaces starting at zero.
// b) Verify and explain: Ruby, every value in an array has a particular location.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: it should capitialize Saturday and Sunday.
// b) Verify and explain: TypeError: weekendDays.toUpperCase is not a function
    at Object.<anonymous> (/Users/learnacademy/Desktop/assessment-1-irvinmoore/coding-concepts.js:44:26)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
 console.log(typeof dataTypes.length)

// a) Your answer: number 
// b) Verify and explain: In this case, dataTypes.length is the length of the array dataTypes, which is the number of elements in the array. The typeof operator is then applied to this number.

