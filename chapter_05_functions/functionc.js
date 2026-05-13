function great(){
    console.log("How are you?");
}
great();
great();
great();
great();
great();
great();
great();
great();


//functional scoped
function mysecret(){
    var secretcode=1234;
    console.log(secretcode);
}
mysecret();//without error

function mysecret(){
    var secretcode=1234;
}
mysecret();
console.log(secretcode);//error



