// const nemo = ['nemo'];
// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'darla', 'hank'];
// const large = new Array(10000).fill('nemo');

// function findNemo(array){
//   let t0 = performance.now();
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'nemo') {
//       console.log('Found NEMO!');
//     }
//   }
//   let t1 = performance.now();
//   console.log(' Call to find Nemo took ' + (t1-t0) + ' milliseconds');
// }

// findNemo(everyone); //O(n) --> Linear Time 

// part 2
// function compressFirstBox(boxes) {
//   console.log(boxes[0]);  //O(1) --> Constant Time, just one operation is done because we are using just the first index in the array.
// }

// // part 2.5
// const boxes= [0,1,2,3,4,5];

// function logFirstTwoBoxes(boxes) {
//   console.log(boxes[0]); // O(1)
//   console.log(boxes[1]); // O(1)
// }
// logFirstTwoBoxes(boxes) // O(2) --> this stays constant time, it can go up, BUT we always call it O(1) because it's constant

// // part 2.75
// // What is the Big O of the below function? (Hint, you may want to go line by line)
// function funChallenge(input) {
//   let a = 10; // O(1) --> Each line gets it, because it has to be run line by line when we run anything, not just the for loop
//   a = 50 + 3; // O(1)

//   for (let i = 0; i < input.length; i++) { //O(n) or O(input) just how many time
//     anotherFunction(); //O(n)
//     let stranger = true; //O(n)
//     a++; //O(n)
//   }
//   return a; //O(1)
// }

// // BIG O(3 + 4n)--> turns into O(n)
// funChallenge()

// // Challenge #2
// // What is the Big O of the below function? (Hint, you may want to go line by line)
// function anotherFunChallenge(input) {
//   let a = 5; // O(1)
//   let b = 10; // O(1)
//   let c = 50; // O(1)
//   for (let i = 0; i < input; i++) {
//     let x = i + 1; //O(n) --> whatever input is, aka n
//     let y = i + 2; //O(n)
//     let z = i + 3; //O(n)

//   }
//   for (let j = 0; j < input; j++) {
//     let p = j * 2; //O(n)
//     let q = j * 2; //O(n)
//   }
//   let whoAmI = "I don't know"; //O(1)
// }

// //BIG O(4 + 5n) --> turns into O(n)

// RULES OF BIG O
// Rule 1: Always worst Case --> Big O notation will always be the worst case scenario of the code.
// Rule 2: Remove Constants --> O(n + 1) the 1 doesn't matter so it's just O(n). O(2a + 100000 + 5000) no constants matter so it's O(a)
// Rule 3:
// • Different inputs should have different variables: O(a + b)
// • A and B arrays nested would be: O(a * b)
// + for steps in order
// * for nested steps
// Rule 4: Drop Non-dominant terms

//O(n^2) Quadratic Time exercise
//Log all pairs of arrays
// const boxes = [1,2,3,4,5];

// function logAllPairsOfArray(array){
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) { //double loop to get pairs of each index 1 1 1 2 1 3 1 4 1 5 2 1 2 2 2 3..
//       console.log(array[i], array[j])
//     }
//   }
// }

// logAllPairsOfArray(boxes)
// //When nested  we get O(n * n) --> O(n^2) - Quadratic Time

// function allSums(numbers) {

//   console.log('these are the numbers:');
//   numbers.forEach(function(number) {
//     console.log(number);
//   });

//   console.log('these are the sums:');
//   numbers.forEach(function(firstNumber) {
//     numbers.forEach(function(secondNumber) {
//       console.log(firstNumber + secondNumber);
//     });
//   });
// }

// allSums( [1,2,3,4,5])

// Big O = O(n + n^2) --> O(n^2)  ---> we drop the "n +" because  it is not dominant per rule #4 of Drop the Non-Dominants
// in Big O we are focused on scalability, so the Dominant term is the term that has the most impact when the scale increases. So get
// rid of the non dominants

//BigO Cheatcheat
// Big Os
// O(1) Constant – no loops
// O(log N) Logarithmic – usually searching algorithms have log n if they are sorted (Binary Search)
// O(n) Linear – for loops, while loops through n items
// O(n log(n)) Log Linear – usually sorting operations
// O(n^2) Quadratic – every element in a collection needs to be compared to ever other element. Two
// nested loops
// O(2^n) Exponential – recursive algorithms that solves a problem of size N
// O(n!) Factorial – you are adding a loop for every element

// Iterating through half a collection is still O(n)
// Two separate collections: O(a * b)

// What Can Cause Time in a Function?
// Operations (+, -, *, /)
// Comparisons (<, >, ==)
// Looping (for, while)
// Outside Function call (function())

// Rule Book
// Rule 1: Always worst Case
// Rule 2: Remove Constants
// Rule 3:
// • Different inputs should have different variables: O(a + b)
// • A and B arrays nested would be: O(a * b)
// + for steps in order
// * for nested steps
// Rule 4: Drop Non-dominant terms

// What Causes Space Complexity?
// • Variables
// • Data Structures
// • Function Call
// • Allocations


// Factorial Time O(n!)
// Adding a nested loop for every element - Super Expensive to run, rarely will see it. If you see it something is wrong


// What is good code?
// 1. Readable
// 2. Scalable - Speed(CPU) & Memory(RAM)


// Which code is best?
// Readable - readable, clean code that others can read that is maintainable.
// Speed - we call time complexity has a big O time complexity that is efficient, scales well
// Memory - use Big O again, but this time for space complexity rather than time complexity

// Sacrifice Speed for Memory and vice versa

//Programs execute in two ways to remember things: Heap and Stack
// Heap is where we store variables taht we assign values to.
// Stack is where we keep track of our function calls.

// // Example: Space Complexity 
// function boooo(n) {
//   for (let i = 0; i< n.length; i++){
//     console.log('booooo!');
//   }
// }

// boooo([1,2,3,4,5]) // O(1) --> because the function has nothing adding space complexity, it's "raw" in a sense

function arrayOfHiNTimes(n){
  let hiArray = [];
  for (let i = 0; i < n; i++){
    hiArray[i] = 'hi';
  }
  return hiArray;
}

arrayOfHiNTimes(6)