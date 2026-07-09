// JavaScript String Examples
// Using single quotes
let name = 'Asima';
console.log(name); // Output: 'Asima'

// Using double quotes
let city = "Rahim Yar Khan";
console.log(city); // Output: "Rahim Yar Khan"

// A string containing numbers and spaces
let address = "House 123, Block B";
console.log(address); // Output: "House 123, Block B"

// Checking the type of data using typeof
let message = "Hello World";
console.log(typeof message); // Output: "string"
console.log(message); // Output: "Hello World"

// 1. String concatenation
//  Joining first name and last name
let firstName = "Asima";
let lastName = "Waheed";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: "Asima Waheed"

// Creating a simple greeting sentence
let country = "Pakistan";
let sentence = "I live in " + country ;
console.log(sentence); // Output: "I live in Pakistan."

// Building a sentence piece by piece
let status = "Learning";
status += " JavaScript";
console.log(status); // Output: "Learning JavaScript"

// 2. Template Literals
// Clean variable injection without '+' signs
let Surname = "Waheed";
let greeting = `Hello, my surname is ${Surname}.`;
console.log(greeting); // Output: "Hello, my surname is Waheed."

// Multi-line strings easily written without breaking code
let multiLine = `This is line one.
This is line two.
This is line three.`;
console.log(multiLine);

// Doing math logic directly inside a string
let price = 100;
let tax = 15;
let total = `The total price is ${price + tax} dollars.`;
console.log(total); // Output: "The total price is 115 dollars."

// 3. String Length property
// Finding the total characters in a short string
let word = "JavaScript";
console.log(word.length); // Output: 10

// Checking how spaces affect the character count
let spacedWord = " Hello ";
console.log(spacedWord.length); // Output: 7 (Includes 2 spaces)

// Testing an empty string length
let empty = "";
console.log(empty.length); // Output: 0

// 4. Characters Access (.charAt() & Bracket Notation)
// Using bracket notation [] to get the first letter
let framework = "React";
let firstLetter = framework[0];
console.log(firstLetter); // Output: "R"

//Using the .charAt() method to find a specific index character
let language = "HTML";
let letter = language.charAt(2);
console.log(letter); // Output: "M"

// Dynamically grabbing the very last character of any string
let fullWord = "Development";
let lastLetter = fullWord[fullWord.length - 1];
console.log(lastLetter); // Output: "t"

// Testing an out-of-bounds index index lookup
let district = "Ryk";
console.log(district[5]); // Output: undefined

// 5. trimming whitespace from a string (The .trim() Method)
// Basic cleaning of blank outer padding
let messyInput = "   Ali Waheed   ";
let cleanInput = messyInput.trim();
console.log(cleanInput); // Output: "Ali Waheed"

// Checking length before and after trimming
let username = "  user123  ";
console.log(username.length);        // Output: 11
console.log(username.trim().length); // Output: 7

// Confirming that middle spacing is preserved intact
let fullSentence = "Learn   English";
console.log(fullSentence.trim()); // Output: "Learn   English" (Middle spaces stay)

// Cleaning text inside an inline console process chain
let fieldInput = " Abu Bakar Ali ";
let formalOutput = fieldInput.trim().toUpperCase();
console.log(formalOutput); // Output: "ABU BAKAR ALI"

// 6. Case Conversions (.toUpperCase() & .toLowerCase())
// Converting a string to uppercase
let text = "hello asma";
let upperText = text.toUpperCase();
console.log(upperText); // Output: "HELLO ASMA"

// Converting a string to lowercase
let heading = "WELCOME TO MY SITE";
let lowerHeading = heading.toLowerCase();
console.log(lowerHeading); // Output: "welcome to my site"

// Practical matching (Making user input lowercase to safely check it)
let emailInput = "AsImA@Gmail.Com";
let systemEmail = "asima@gmail.com";
console.log(emailInput.toLowerCase() === systemEmail); // Output: true

// Keeping original variable data unchanged
let generalMessage = "Code";
generalMessage.toUpperCase(); // This returns "CODE" but doesn't save it
console.log(generalMessage); // Output: "Code" (Original stays the same)

// 7. Searching Strings (.includes() & .indexOf())
//  Checking if a keyword exists using .includes()
let biography = "Asmaa is a front-end developer.";
let hasTech = biography.includes("front-end");
console.log(hasTech); // Output: true

// Checking case-sensitivity rules during a search
let title = "JavaScript Journey";
console.log(title.includes("javascript")); // Output: false (because 'j' is lowercase)

// Finding the exact index location of a word using .indexOf()
let quote = "Keep learning every day.";
let position = quote.indexOf("learning");
console.log(position); // Output: 5

// Handling missing search items with .indexOf()
// .indexOf() has a universal rule: If the item is not found, it always returns -1.
// a return value of -1 simply means: "Search completed, but nothing was found."
let baseline = "Hello World";
let missingIndex = baseline.indexOf("Asima");
console.log(missingIndex); // Output: -1

// 8. Extracting Substrings (.slice())
// Extracting a piece from a specific start to an end point
let simpleText = "FrontendDeveloper";
let partOne = simpleText.slice(0, 8);
console.log(partOne); // Output: "Frontend"

// Slicing from a starting position all the way to the very end
let phrase = "Code with confidence";
let remainingText = phrase.slice(5);
console.log(remainingText); // Output: "with confidence"

// Using negative index numbers to slice backwards from the end
let filename = "script.js";
let extension = filename.slice(-3);
console.log(extension); // Output: ".js"

// Slicing a specific word out of the middle of a sentence
let remember = "I love programming";
let targetWord = remember.slice(7, 18);
console.log(targetWord); // Output: "programming"

// 9. Replacing Text (.replace() & .replaceAll())
// Replacing a single word using .replace()
let template = "Hello user, welcome back.";
let personalized = template.replace("user", "Asima");
console.log(personalized); // Output: "Hello Asima, welcome back."

// Demonstrating how standard .replace() ignores subsequent matches
let myMessage = "bad code brings bad bugs";
let partialFix = myMessage.replace("bad", "good");
console.log(partialFix); // Output: "good code brings bad bugs"

// Updating every single instance globally using .replaceAll()
let fullMessage = "bad code brings bad bugs";
let totalFix = fullMessage.replaceAll("bad", "good");
console.log(totalFix); // Output: "good code brings good bugs"

// Using text replacement to alter URL format strings cleanly
let rawUrl = "https://mywebsite.com/blog post details";
let cleanUrl = rawUrl.replaceAll(" ", "-");
console.log(cleanUrl); // Output: "https://mywebsite.com/blog-post-details"

// 10. Splitting Strings (.split())
// Splitting a Sentence into Individual Words
let mission = "Learn JavaScript step by step";
let wordsArray = mission.split(" ");
console.log(wordsArray); // Output: [ 'Learn', 'JavaScript', 'step', 'by', 'step' ]
// We can now access individual words using index brackets
console.log(wordsArray[1]); // Output: "JavaScript"

// Exploding a String into Single Characters
let userName = "Asima";
let characters = userName.split("");
console.log(characters); // Output: [ 'A', 's', 'i', 'm', 'a' ]
console.log(characters.length); // Output: 5

// Splitting CSV Data (Comma Separated Values)
let dataRow = "HTML,CSS,JavaScript,Bootstrap,React";
let skillsList = dataRow.split(",");
console.log(skillsList); // Output: [ 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React' ]
console.log(`I have ${skillsList.length} major skills listed.`); // Output: "I have 5 major skills listed."

// Using a Split Limit to Capture Top Items
let longText = "Red-Green-Blue-Yellow-Orange-Purple";
let topColors = longText.split("-", 3); // Cut at the dash, but only keep the first 3 results
console.log(topColors);  // Output: [ 'Red', 'Green', 'Blue' ]

// 11. Joining Strings (.join())
// Creating a Regular Sentence from Words
let words = ["Hello", "universe", "from", "Web Developer"];
let sentences = words.join(" ");
console.log(sentences); // Output: "Hello universe from Web Developer"

// Joining a List of Items with Commas
let items = ["HTML", "CSS", "JavaScript", "React"];
let itemList = items.join(", ");
console.log(itemList); // Output: "HTML, CSS, JavaScript, React"

// Joining a List of Items with a Custom Separator/Connectors ( - or | )
let colors = ["Red", "Green", "Blue"];
let colorString = colors.join(" | ");
console.log(colorString); // Output: "Red | Green | Blue"

// Joining a List of Items with No Separator
let letters = ["A", "B", "C", "D"];
let letterString = letters.join("");
console.log(letterString); // Output: "ABCD"    
