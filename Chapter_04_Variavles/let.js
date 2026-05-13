// let - Block Scoped
let a = 10;

let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("Retry attempt:", retryCount);
let retryCount = 1; // This will cause an error because 'retryCount' is already declared in the same scope