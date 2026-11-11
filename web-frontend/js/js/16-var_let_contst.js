// var, let , and const

// global scope
var x = 1; // function scoped
let y = 2; // block scoped
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc(){
    var x = 10; // function scoped
    const y = 30; // block scoped
    {
        var x = 11;
        const y = 8;
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }
    console.log(`Function: ${x}`);
    console.log(`Function: ${y}`);
    console.log(`Function: ${z}`);
}
myFunc();