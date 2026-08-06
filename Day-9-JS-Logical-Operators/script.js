// Logical Operators in JavaScript

// Example 1: Checking two conditions at once using AND
let driverAge = 20;
let hasValidLicense = true;
let canDriveCar = (driverAge >= 18) && hasValidLicense;
console.log(canDriveCar); // Output: true

// Example 2: Checking if at least one condition passes using OR
let isCurrentWeekend = false;
let isNationalHoliday = true;
let canTakeRest = isCurrentWeekend || isNationalHoliday;
console.log(canTakeRest); // Output: true

// Example 3: Inverting a boolean flag using NOT
let isAudioMuted = false;
let isAudioUnmuted = !isAudioMuted;
console.log(isAudioUnmuted); // Output: true

// Example 4: Evaluating complex expressions using parentheses
let isAccountLoggedIn = true;
let isAccountEmailVerified = false;
let isSystemAdministrator = true;
let canAccessAdminDashboard = isAccountLoggedIn && (isAccountEmailVerified || isSystemAdministrator);
console.log(canAccessAdminDashboard); // Output: true
// ---------------------------------------------------------//

// Types of Logical Operators in JavaScript

// 1. AND (&&) Operator

// Example 1: Checking login credentials
let userEnteredCorrectEmail = true;
let userEnteredCorrectPassword = true;

let canLoginSystem = userEnteredCorrectEmail && userEnteredCorrectPassword;
console.log(canLoginSystem); // Output: true (Both are true)

// Example 2: Checking age and driving permission
let yourAge = 20;
let hasDriverLicense = false;

let aliDrive = (yourAge >= 18) && hasDriverLicense;
console.log(aliDrive); // Output: false (Failed because hasDriverLicense is false)

// Example 3: E-commerce free shipping condition
let cartTotal = 150;
let isVipMember = true;

let getsFreeShipping = (cartTotal > 100) && isVipMember;
console.log(getsFreeShipping); // Output: true

// ---------------------------------------------------------

// 2. OR (||) Operator

// Example 1: Accepting multiple payment options
let holdsCreditCard = false;
let holdsJazzCash = true;

let canPayBill = holdsCreditCard || holdsJazzCash;
console.log(canPayBill); // Output: true (JazzCash is true)

// Example 2: Determining days off
let isSaturday = true;
let isSunday = false;

let lastWeekend = isSaturday || isSunday;
console.log(lastWeekend); // Output: true

// Example 3: Site access for admins or owners
let isAccountAdmin = false;
let isAccountOwner = false;

let canEditSettings = isAccountAdmin || isAccountOwner;
console.log(canEditSettings); // Output: false (Both options are false)

// ---------------------------------------------------------

// 3. NOT (!) Operator

// Example 1: Inverting a toggle state
let hasMuted = false;
let isSoundOn = !hasMuted;

console.log(isSoundOn); // Output: true

// Example 2: Form validation check
let isFormEmpty = true;

if (!isFormEmpty) {
  console.log("Submitting form...");
} else {
  console.log("Please fill out the form!"); // Output: "Please fill out the form!"
}

// Example 3: Converting data types to pure booleans (Double NOT !!)
let enteredText = "Asima";
let hasContent = !!enteredText; // Flips truthy string to true

console.log(hasContent); // Output: true

// Example 4: Checking if a user is not logged in
let hasLoggedIn = false;
if (!hasLoggedIn) {
  console.log("Please log in to continue."); // Output: "Please log in to continue."
}

// ---------------------------------------------------------

// 4. Complex Expressions

// Example 1: Combining AND and OR operators
let weLoggedIn = true;
let ourEmailVerified = false;
let ourAdmin = true;

let ourAccessAdminPanel = weLoggedIn && (ourEmailVerified || ourAdmin);
console.log(ourAccessAdminPanel); // Output: true

// Example 2: Web app access logic
let isUserSessionActive = true;
let isUserEmailVerified = false;
let isSuperAdmin = true;

// User can enter if logged in AND (either email is verified OR they are admin)
let canAccessDashboard = isUserSessionActive && (isUserEmailVerified || isSuperAdmin);
console.log(canAccessDashboard); // Output: true

// Example 3: Discount rules for an online store
let orderTotal = 80;
let hasPromoCode = true;
let isFridaySale = false;

// Discount applies if (order > 100 AND promo code) OR if it's Friday Sale
let qualifiesForDiscount = (orderTotal >= 100 && hasPromoCode) || isFridaySale;
console.log(qualifiesForDiscount); // Output: false

// Example 4: Safety check with NOT in a complex group
let playerAge = 22;
let hasParentalConsent = false;
let isAccountBanned = false;

// Can play if (age >= 18 OR has consent) AND account is NOT banned
let canPlayGame = (playerAge >= 18 || hasParentalConsent) && !isAccountBanned;
console.log(canPlayGame); // Output: true