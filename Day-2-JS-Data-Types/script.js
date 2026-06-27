// === 1. NUMBER EXAMPLES ===
   let wholeNumber = 25;
   let decimalNumber = 99.95;
   console.log("Number 1:", wholeNumber); 
   console.log("Number 2:", decimalNumber);
   console.log("Calculated Math Total:", wholeNumber + decimalNumber); // 124.95

// === 2. STRING EXAMPLES ===
   let singleQuoteText = 'Hello from Rahim Yar Khan!';
   let doubleQuoteText = "Learning JavaScript feels excellent.";
   console.log("Single Quote String:", singleQuoteText);
   console.log("Double Quote String:", doubleQuoteText);

// === 3. BOOLEAN EXAMPLES ===
   let isUserLoggedIn = true;
   let calculatedStatus = (5 > 10); // Checks if 5 is bigger than 10
   let _isAvailable = true; 
   console.log("Login Status State:", isUserLoggedIn); // true
   console.log("Logic Evaluation Check:", calculatedStatus); // false
   console.log("Undefined Status Check:", _isAvailable); // true

// === 4. UNDEFINED EXAMPLES ===
   let placeholderBox; 
   console.log("Declared but unassigned value:", placeholderBox); // undefined
   let myVariable;       // This variable is declared but not assigned a value
   console.log(myVariable);                 // undefined

// === 5. NULL EXAMPLES ===
   let trackingValue = null;
   console.log("Intentionally cleared variable item:", trackingValue); // null
   let emptyValue = null;                   // This variable is set to null
   console.log(emptyValue);                 // null

// === 6. SYMBOL EXAMPLES ===
   let tokenKey1 = Symbol("id");
   let tokenKey2 = Symbol("id");
   console.log("Are identical symbols unique?", tokenKey1 === tokenKey2); // false
   let sym1 = Symbol("mySymbol");           // Create a symbol with a description
   console.log(sym1);                      // Symbol(mySymbol)
   let sym2 = Symbol("mySymbol");          // Create another symbol with the same description
   console.log(sym2);                      // Symbol(mySymbol)

// === 7. BIGINT EXAMPLES ===
   let massiveCount = 9007199254740991n;
   console.log("BigInt terminal formatting output:", massiveCount); // 9007199254740991n
   let bigInt1 = BigInt("9007199254740991");            // A BigInt
   console.log(bigInt1);                                 // 9007199254740991n              // bigInt ends with n

// === 8. OBJECT EXAMPLES ===
   let studentProfile = 
   {
      firstName: "Asima",
      currentDay: 2,
      isLearningActive: true
   };
   console.log("Full Object Record:", studentProfile);
   console.log("Accessing key via dot notation:", studentProfile.firstName); // Asima

   let person = 
   {                                 // An object with properties
      name: "Ali",                   // A string property
      age: 20,                       // A number property
      isStudent: true                // A boolean property
   };
   console.log(person.name);                   // Ali
   console.log(person.age);                    // 20
   console.log(person.isStudent);              // true
   console.log("Complete Object:", person);  // { name: 'Ali', age: 20, isStudent: true }
   console.log(person.age);                    // 20
