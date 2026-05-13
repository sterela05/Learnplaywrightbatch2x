var a=10;//global scope
console.log(a);

function printhello(){
    console.log("Hello");
     a=20;//local scope
    console.log(a);
}
printhello();
var a=50;
console.log(a);
