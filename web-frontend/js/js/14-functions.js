// Methods = Built-in Functions!
// Function Declaretion Syntax:, Function provide reusable code!

// Not parameter
function sum(){
    return 2 + 2;
}
console.log(sum());

// Have parameter
function sum1(num1 , num2){
    return num1 * num2;
}
console.log(sum1(10,2))

function getUserNameEmail(email){
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameEmail("dihengmesahong@gmail.com"));