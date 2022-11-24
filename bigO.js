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

function allSums(numbers) {

  console.log('these are the numbers:');
  numbers.forEach(function(number) {
    console.log(number);
  });

  console.log('these are the sums:');
}

allSums( [1,2,3,4,5,6,7])