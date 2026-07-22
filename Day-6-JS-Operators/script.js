// 1. Arithmetic Operators
let a = 10;
let b = 3;

console.log(a + b);  // Addition       → 13
console.log(a - b);  // Subtraction    → 7
console.log(a * b);  // Multiplication → 30
console.log(a / b);  // Division       → 3.333...
console.log(a % b);  // Modulus (remainder) → 1

// Real use of %: Checking if a number is even or odd.
let num = 7;
console.log(num % 2); // 1 → odd
console.log(8 % 2);   // 0 → even

// 2. Comparison Operators

// Equal to (==)
let c = 5;
let d = 5;
console.log(c == d); // true

// Not equal to (!=)
console.log(c != d); // false

// Greater than (>)
console.log(c > d); // false

// Less than (<)
console.log(c < d); // false

// Greater than or equal to (>=)
console.log(c >= d); // true

// Less than or equal to (<=)
console.log(c <= d); // true

// Loose Equality (==) — "Type Coercion"
let num1 = 5;
let num2 = "5";
console.log(num1 == num2); // true — type coercion occurs

// Strict Equality (===) — "No Type Coercion"
console.log(num1 === num2); // false — values are equal but types are different

// 3. Logical Operators
let x = true;
let y = false; 

// Logical AND (&&)
let age = 20;
let hasID = true;
console.log(age >= 18 && hasID); // true → both conditions are true

// Logical OR (||)
let isStudent = false;
console.log(age >= 18 || isStudent); // true → one condition is true

// Logical NOT (!)
console.log(!isStudent); // true → negates the value of isStudent


// 4. Assignment Operators

// Simple assignment (=)
let e = 10;
// Addition assignment (+=)
e += 5; // equivalent to e = e + 5
console.log(e); // 15

// Subtraction assignment (-=)
e -= 3; // equivalent to e = e - 3
console.log(e); // 12

// Multiplication assignment (*=)
e *= 2; // equivalent to e = e * 2
console.log(e); // 24

// Division assignment (/=)
e /= 4; // equivalent to e = e / 4
console.log(e); // 6

// Modulus assignment (%=)
e %= 5; // equivalent to e = e % 5
console.log(e); // 1