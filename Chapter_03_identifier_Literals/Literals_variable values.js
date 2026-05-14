// ==========================================
// LITERALS AND VARIABLE VALUES IN JAVASCRIPT
// ==========================================

// 1. STRING LITERALS
// ==================
const singleQuote = 'Hello World';          // Single quotes
const doubleQuote = "Hello World";          // Double quotes
const backticks = `Hello World`;            // Template literals (backticks)
const templateExpr = `Value: ${5 + 5}`;    // Template literal with expression

console.log("STRING LITERALS:");
console.log(singleQuote);
console.log(doubleQuote);
console.log(backticks);
console.log(templateExpr);


// 2. NUMERIC LITERALS
// ====================
const integer = 42;                         // Integer
const decimal = 3.14;                       // Decimal/Float
const negative = -100;                      // Negative number
const scientific = 1.5e2;                   // Scientific notation (150)
const hexadecimal = 0x1A;                   // Hexadecimal (26 in decimal)
const octal = 0o12;                         // Octal (10 in decimal)
const binary = 0b1010;                      // Binary (10 in decimal)
const infinity = Infinity;                  // Infinity
const negInfinity = -Infinity;              // Negative Infinity
const notANumber = NaN;                     // Not a Number

console.log("\nNUMERIC LITERALS:");
console.log(integer);
console.log(decimal);
console.log(scientific);
console.log(hexadecimal);
console.log(octal);
console.log(binary);
console.log(infinity);
console.log(notANumber);


// 3. BOOLEAN LITERALS
// ====================
const trueValue = true;                     // Boolean true
const falseValue = false;                   // Boolean false

console.log("\nBOOLEAN LITERALS:");
console.log(trueValue);
console.log(falseValue);


// 4. NULL AND UNDEFINED
// ======================
const nullValue = null;                     // Explicitly set to no value
let undefinedValue;                         // Not assigned any value (undefined)

console.log("\nNULL AND UNDEFINED:");
console.log(nullValue);
console.log(undefinedValue);


// 5. OBJECT LITERALS
// ===================
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

const emptyObject = {};

console.log("\nOBJECT LITERALS:");
console.log(person);
console.log(emptyObject);


// 6. ARRAY LITERALS
// ==================
const fruits = ['apple', 'banana', 'orange'];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, 'string', true, null];
const emptyArray = [];

console.log("\nARRAY LITERALS:");
console.log(fruits);
console.log(numbers);
console.log(mixed);
console.log(emptyArray);


// 7. FUNCTION LITERALS (Function Expressions)
// =============================================
const add = function (a, b) {
    return a + b;
};

const multiply = (a, b) => a * b;          // Arrow function

console.log("\nFUNCTION LITERALS:");
console.log(add(5, 3));
console.log(multiply(4, 5));


// 8. REGULAR EXPRESSION LITERALS
// ================================
const regex1 = /hello/;                     // Pattern without flags
const regex2 = /world/gi;                   // With flags (global, insensitive)

console.log("\nREGULAR EXPRESSION LITERALS:");
console.log(regex1);
console.log(regex2);


// ==========================================
// KEY DIFFERENCES: LITERALS vs VARIABLES
// ==========================================
// LITERAL: The actual fixed value written in code (42, "hello", true)
// VARIABLE: A named container that holds/stores a value

const myVar = 42;   // 42 is the LITERAL, myVar is the VARIABLE

console.log("\n\nLITERAL vs VARIABLE:");
console.log("Literal value: 42");
console.log("Variable value:", myVar);
