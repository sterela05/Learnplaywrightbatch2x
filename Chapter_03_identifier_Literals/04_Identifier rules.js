// Rules for Identifiers in JavaScript

// • Identifiers must start with a letter, underscore (_), or dollar sign ($)
//   Example 1: let myVariable = 10;
//   Example 2: const _privateVar = "secret";
//   Example 3: var $specialVar = true;

// • Identifiers cannot start with a number
//   Example 1: let var1 = 5; ✓ (correct)
//   Example 2: let 1var = 5; ✗ (incorrect)
//   Example 3: const num123 = 100; ✓ (correct)

// • Identifiers can contain letters, numbers, underscores, and dollar signs after the first character
//   Example 1: let firstName_$test = "John";
//   Example 2: const user123Name = "Alice";
//   Example 3: var _$value_123 = 42;

// • Identifiers are case-sensitive
//   Example 1: let myName = "John"; and let myname = "Jane"; are different variables
//   Example 2: const firstName = "Bob"; and const firstname = "Tom"; are different variables
//   Example 3: var UserID = 1; and var userid = 2; refer to different variables

// • Identifiers cannot be reserved keywords
//   Example 1: let if = 5; ✗ (incorrect - 'if' is a keyword)
//   Example 2: const function = "test"; ✗ (incorrect - 'function' is a keyword)
//   Example 3: let myFunction = () => {}; ✓ (correct - 'myFunction' is not a keyword)

// • Identifiers cannot contain spaces or special characters (except _ and $)
//   Example 1: let userName = "John"; ✓ (correct)
//   Example 2: let user-name = "John"; ✗ (incorrect - contains hyphen)
//   Example 3: let user@name = "John"; ✗ (incorrect - contains @)
