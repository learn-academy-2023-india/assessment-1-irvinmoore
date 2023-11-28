// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Run the file with the following command: $ node code-challenges.js

// -------------------- INSTRUCTOR EXAMPLE: Create a function that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
//const fruit1 = "apple"
//const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
//const fruit3 = "cherry"
//const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code: 
// Input: 2 strings
// Output: which string is longer via characters
// Compare the character length
// Conditional statement is needed to evaluate the length

 //const whichStringIsLonger = (string1, string2) => {
     //if(string1.length > string2.length){
        // return string1
    //}   else {
        //return string2
    //}
//}
//console.log(whichStringIsLonger(fruit1, fruit2))
//console.log(whichStringIsLonger(fruit3, fruit4))


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

//const padres1998WorldSeriesRuns1 = [2, 5, 2, 2, 4]
//const padres1998WorldSeriesRuns2 = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
// Input: arrays, .concat, seperate the two names with 1 and 2
// Output: what is the length 
// Return the length when combined


  //const comboArray = padres1998WorldSeriesRuns1.concat(padres1998WorldSeriesRuns2)

  //const comboArrayLength = comboArray.length

  //console.log("Combo Array:", comboArray)
  //console.log("Combo Array Length:", comboArrayLength)






// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

// const currentCohort = "LEARN 2023"
// Expected output: "3202 NRAEL"

// Pseudo code: 
// Input: .reverse(), .split, and join.
// Output: reversed letters 


 //const currentCohort = "LEARN 2023"

 //const reversedString = currentCohort.split('').reverse().join('')

 //console.log("Reversed String:", reversedString)



// --------------------3) Use a for loop to log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27


// Pseudo code: 
// Input: loop
// Output: only the odd numbers
// Conditional statement is needed

for (let i = 0; i < stockExchange.length; i++) {
    
    if (stockExchange[i] % 2 !== 0) {
        
        console.log(stockExchange[i]);
    }
}