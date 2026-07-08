// Example of circumstance where let is useful
const y = 30;
console.log(y);         // Output: 30

// Example of let - Reassigning the value
let score = 10;
console.log(score);      // 10
score = 20;            // Reassigning the value of score
console.log(score);       // Output: 20

let x = 10;
console.log(x);              // Output: 10
x = 30;                      // Reassigning the value of x
console.log(x);             // Output: 30

// Example of const - // we use const for values that are not expected to change.
const maxScore = 100;
console.log(maxScore);     // Output: 100

const fullName = "Asima Waheed";
console.log(fullName);     // Output: Asima Waheed

const secondsInMinute = 60;     //values-not expected to change.
console.log(secondsInMinute);  // Output: 60

const brandName = "Apple";  
console.log(brandName);         // Output: Apple

const dayInWeek = 7;            
console.log(dayInWeek);         // Output: 7

const monthsInYear = 12;     
console.log(monthsInYear);    // Output: 12

const currentYear = 2026;
console.log(currentYear);

// additionally, if we declare an object or an array with const, 
// We can still modify the 'contents' of the object or array, 
// but we cannot reassign the variable itself.

const myArray = [1, 2, 3];
myArray.push(4);           // This is allowed
console.log(myArray);      // Output: [1, 2, 3, 4]

const myObject = { name: 'Sara' };
myObject.name = 'Asima';        // This is allowed
console.log(myObject);      // Output: { name: 'Asima' }
