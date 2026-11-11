// User Input

let nameUser = prompt("Please enter your name....");
if(nameUser){
    console.log(nameUser.length);
    console.log(nameUser.trim().length);
    console.log(nameUser.trim());
}else{
    console.log("You didn't enter your name.");
}