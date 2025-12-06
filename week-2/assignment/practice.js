// ===================================================
// 1. Swap the Values
// Question: Swap x and y using a third variable
// Reason: We use a temporary variable to hold one value during the swap.
let x = 10;
let y = 20;
console.log("Before Swap: x =", x, ", y =", y);

let temp = x; // store x temporarily
x = y;        // put y into x
y = temp;     // put temp (old x) into y

console.log("After Swap: x =", x, ", y =", y);
console.log("------------------------------------------------");


// ===================================================
// 2. Simple Math with Variables
// Question: Create sum, product, and average
// Reason: Sum is addition, product is multiplication, and average is total / number of items.
let a = 8;
let b = 3;

let sum = a + b;               // 8 + 3 = 11
let product = a * b;           // 8 * 3 = 24
let average = (a + b) / 2;     // (8 + 3) / 2 = 5.5

console.log("Sum =", sum);
console.log("Product =", product);
console.log("Average =", average);
console.log("------------------------------------------------");


// ===================================================
// 3. Temperature Conversion
// Question: Convert Celsius to Reaumur, Fahrenheit, and Kelvin
// Reason: Using given formulas:
//   R = (4/5) * C
//   F = (9/5) * C + 32
//   K = C + 273.15
let C = 25; 

let R = (4/5) * C;       
let F = (9/5) * C + 32;  
let K = C + 273.15;      

console.log("Celsius =", C);
console.log("Reaumur =", R);     // 20
console.log("Fahrenheit =", F);  // 77
console.log("Kelvin =", K);      // 298.15
console.log("------------------------------------------------");


// ===================================================
// 4. Predict the Value
// Question: What is result = a + b * a ?
// Reason: Operator precedence: multiplication happens before addition.
let a1 = 5;
let b1 = 2;
let result = a1 + b1 * a1;
// Step 1: b1 * a1 = 2 * 5 = 10
// Step 2: a1 + 10 = 5 + 10 = 15
console.log("Result =", result); // 15
console.log("------------------------------------------------");


// ===================================================
// 5. Combine Strings
// Question: Combine first and last name into fullName
// Reason: Use string concatenation (+). Adding a space makes it readable.
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName; 
console.log("Full Name =", fullName); // "John Doe"

// Without space
let noSpaceName = firstName + lastName;
console.log("Without space =", noSpaceName); // "JohnDoe"
console.log("------------------------------------------------");


// ===================================================
// 6. Guess the Output
// Question: What will console.log(y) print after changing x?
// Reason: In JavaScript, primitive types (numbers, strings, booleans) are copied by VALUE, not by reference.
// So y keeps the old value of x.
let x1 = 10;
let y1 = x1;  // y1 = 10
x1 = 20;      // changing x1 does not affect y1
console.log("Value of y1 =", y1); // 10
