// === 1. DECLARATION & INITIALIZATION EXAMPLES ===
    let age = 20; 
    console.log("Initialized Age:", age); // 20

    let basePrice = 100;
    console.log("Initialized Price:", basePrice); // 100

// === 2. REASSIGNMENT EXAMPLES ===
    let totalStudents = 25;
    console.log("Original Count:", totalStudents); // 25
        
    totalStudents = 30; // Overwriting the inner contents
    console.log("Reassigned Count Value:", totalStudents); // 30

// === 3. CASE SENSITIVITY EXAMPLES ===
    let worker = 12;
    let Worker = 15;
    let WORKER = 18;
    console.log("Lowercase Worker:", worker); // 12
    console.log("Capitalized Worker:", Worker); // 15
    console.log("Uppercase WORKER:", WORKER); // 18

// === 4. CAMELCASE EXAMPLES ===
    let userFirstName = "Asima";
    let finalTotalPrice = 540;
    let isAccountActive = true;
    console.log("camelCase String Name:", userFirstName); // Asima
    console.log("camelCase Number Value:", finalTotalPrice); // 540
    console.log("camelCase Boolean Value:", isAccountActive); // true

// === 5. VALID CHARACTER START EXAMPLES ===
    let _userAge = 23;        // Allowed: Starts with underscore
    let $totalPrice = 100;    // Allowed: Starts with dollar sign
    let normalScore = 95;     // Allowed: Starts with normal letter   
    console.log("Underscore Variable:", _userAge); // 23
    console.log("Dollar Sign Variable:", $totalPrice); // 100
    console.log("Standard Name Variable:", normalScore); // 95
