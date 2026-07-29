// 1. Function Syntax (Declaring & Calling)
//  Basic greeting function declaration and call
function showWelcomeMessage() {
  console.log("Welcome to JavaScript Journey!");
}

showWelcomeMessage(); // Calling the function -> Output: "Welcome to JavaScript Journey!"
showWelcomeMessage(); // Calling it a second time!

// Function that performs a specific task (printing portfolio owner)
function displayDeveloperName() {
  let developer = "Asima Waheed";
  console.log(`Developer Portfolio: ${developer}`);
}

displayDeveloperName(); // Output: "Developer Portfolio: Asima Waheed"

//  Function executing multiple lines of code sequentially
function printSystemHeader() {
  console.log("====================");
  console.log(" SYSTEM DASHBOARD ");
  console.log("====================");
}

printSystemHeader();

//  Calling a function inside another calculation flow
function logSeparator() {
  console.log("--------------------");
}

console.log("Step 1: Start");
logSeparator();
console.log("Step 2: Finish");
logSeparator();

// 2. Parameters vs. Passing Arguments
//  Single parameter and argument
function greetUser(userName) { // 'userName' is the PARAMETER
  console.log(`Hello, ${userName}! Welcome back.`);
}

greetUser("ASIMA");  // "ASIMA" is the ARGUMENT -> Output: "Hello, ASIMA! Welcome back."
greetUser("ABEEHA"); // "ABEEHA" is the ARGUMENT -> Output: "Hello, ABEEHA! Welcome back."

//  Multiple parameters (Order matters!)
function displayLocation(city, country) {
  console.log(`Location: ${city}, ${country}`);
}

displayLocation("Rahim Yar Khan", "Pakistan"); // Output: "Location: Rahim Yar Khan, Pakistan"

//  Passing different data types as arguments
function printProductInfo(title, price, inStock) {
  console.log(`Item: ${title} | Price: $${price} | Available: ${inStock}`);
}

printProductInfo("Wireless Mouse", 25, true); // Output: "Item: Wireless Mouse | Price: $25 | Available: true"

//  Default parameters (fallback values if no argument is passed)
function calculateDiscount(price, discountPercent = 10) { // 10 is default
  let savings = (price * discountPercent) / 100;
  console.log(`You saved: $${savings}`);
}

calculateDiscount(100);     // Uses default 10% -> Output: "You saved: $10"
calculateDiscount(100, 20); // Overrides default with 20% -> Output: "You saved: $20"

// 3. The return Keyword
// Returning a simple math calculation result
function addNumbers(num1, num2) {
  return num1 + num2; // Sends back the sum
}

let sumResult = addNumbers(15, 25); // Stores the returned value (40)
console.log(sumResult); // Output: 40

//  Using return value directly inside a string template
function formatPrice(amount) {
  return `$${amount.toFixed(2)}`;
}

let productText = `Total Due: ${formatPrice(49.9)}`;
console.log(productText); // Output: "Total Due: $49.90"

// Function with early return logic (stopping code execution early)
function checkAgeAccess(age) {
  if (age < 18) {
    return "Access Denied"; // Stops function here if age < 18
  }
  
  return "Access Granted"; // Only runs if age >= 18
}

console.log(checkAgeAccess(15)); // Output: "Access Denied"
console.log(checkAgeAccess(22)); // Output: "Access Granted"

//  Combining string methods inside a returned output
function cleanAndFormatName(rawName) {
  let cleaned = rawName.trim().toLowerCase();
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

let formattedName = cleanAndFormatName("   aSIMA   ");
console.log(formattedName); // Output: "Asima"