// Global Scope vs. Block / Local Scope

// Example 1: Accessing a Global variable everywhere
let globalAppName = "Portfolio Dashboard"; // Global Variable

function displayAppName() {
  console.log(globalAppName); // Accessible inside function
}

displayAppName(); // Output: "Portfolio Dashboard"
console.log(globalAppName); // Output: "Portfolio Dashboard"

// Example 2: Block Scope barrier using curly braces {}
if (true) {
  let blockVariable = "Inside Block"; // Local/Block Variable
  console.log(blockVariable); // Output: "Inside Block"
}

// Trying to access blockVariable outside the block causes an error!
// console.log(blockVariable); // Error: blockVariable is not defined

// Example 3: Function Scope (Local to the function)
function calculateTotal() {
  let taxRate = 0.15; // Local to function
  return 100 * taxRate;
}

calculateTotal();
// console.log(taxRate); // Error: taxRate is not defined outside function

// Example 4: Variable shadowing (Global vs Local with same name)
let userName = "Asima (Global)";

function showUser() {
  let userName = "Asima (Local)"; // Local variable shadows global variable
  console.log(userName);
}

showUser(); // Output: "Asima (Local)"
console.log(userName); // Output: "Asima (Global)"


// Keyword Access Barriers (let / const vs. var)

// Example 1: 'var' leaks outside an 'if' block
if (true) {
  var leakedVar = "I escaped the block!";
}
console.log(leakedVar); // Output: "I escaped the block!" (Dangerous behavior)

if (true) {
  let safeLet = "I am locked inside!";
}
// console.log(safeLet); // Error: safeLet is not defined


// Example 2: 'const' prevents re-assignment and protects block scope
const API_URL = "https://api.website.com";
// API_URL = "https://other.com"; // Error: Assignment to constant variable

if (true) {
  const API_URL = "https://local.com"; // Allowed: completely separate block scope
  console.log(API_URL); // Output: "https://local.com"
}


// Example 3: 'var' inside loops leaking into the global scope
for (var i = 0; i < 3; i++) {
  // Loop running
}
console.log(i); // Output: 3 ('i' leaked into the global scope!)

for (let j = 0; j < 3; j++) {
  // Loop running
}
// console.log(j); // Error: 'j' is not defined (Properly cleaned up!)