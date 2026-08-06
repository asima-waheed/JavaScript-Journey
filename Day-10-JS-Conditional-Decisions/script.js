// Conditional Decisions

// Example 1: Basic user action check
let isSystemUserActive = true;

if (isSystemUserActive) {
  console.log("Status: User is online.");
}   // Output: "Status: User is online."


// Example 2: Checking numeric boundaries for web layout
let screenDisplayWidth = 1200;

if (screenDisplayWidth >= 1024) {
  console.log("Layout: Displaying Desktop Version.");
}  // Output: "Layout: Displaying Desktop Version."


// Example 3: Verifying cart threshold inside a function
function checkFreeDeliveryEligible(orderAmount) {
  if (orderAmount >= 50) {
    return "Eligible for Free Delivery!";
  }
  return "Standard Delivery Fee Applies.";
}

console.log(checkFreeDeliveryEligible(75)); // Output: "Eligible for Free Delivery!"


// Example 4: Quick decision using a ternary operator shorthand
let currentCartTotal = 80;
let checkoutStatus = currentCartTotal >= 100 ? "Discount Applied" : "No Discount";

console.log(checkoutStatus);  // Output: "No Discount"

// -----------------------------------------------------------------------//

// Code Examples (Structuring if, else if, and else):

// Example 1: Categorizing age brackets for ticket pricing
let visitorAge = 15;

if (visitorAge < 12) {
  console.log("Ticket Category: Child Ticket ($5)");
} else if (visitorAge < 18) {
  console.log("Ticket Category: Student Ticket ($10)");
} else if (visitorAge < 60) {
  console.log("Ticket Category: Adult Ticket ($15)");
} else {
  console.log("Ticket Category: Senior Ticket ($8)");
}   // Output: "Ticket Category: Student Ticket ($10)"


// Example 2: Grading system based on marks percentage
let studentExamScore = 82;

if (studentExamScore >= 90) {
  console.log("Grade Evaluation: A+ Grade");
} else if (studentExamScore >= 80) {
  console.log("Grade Evaluation: A Grade");
} else if (studentExamScore >= 70) {
  console.log("Grade Evaluation: B Grade");
} else if (studentExamScore >= 60) {
  console.log("Grade Evaluation: C Grade");
} else {
  console.log("Grade Evaluation: Needs Improvement");
}    // Output: "Grade Evaluation: A Grade"


// Example 3: Nested IF statements for ATM withdrawal validation
let userAccountBalance = 400;
let isAtmCardValid = true;
let requestedWithdrawal = 100;

if (isAtmCardValid) {
  if (userAccountBalance >= requestedWithdrawal) {
    console.log("Transaction Status: Cash Dispensed Successfully!");
  } else {
    console.log("Transaction Status: Insufficient Funds.");
  }
} else {
  console.log("Transaction Status: Card Rejected.");
}  // Output: "Transaction Status: Cash Dispensed Successfully!"


// Example 4: Server HTTP Response code handler function
function handleServerStatusCode(httpResponseCode) {
  if (httpResponseCode === 200) {
    return "Status 200: Request Successful!";
  } else if (httpResponseCode === 404) {
    return "Status 404: Resource Not Found.";
  } else if (httpResponseCode === 500) {
    return "Status 500: Internal Server Error.";
  } else {
    return "Status: Unknown Error Code Encountered.";
  }
}

console.log(handleServerStatusCode(404));  // Output: "Status 404: Resource Not Found."
