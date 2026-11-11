// Conditionals: If Statements

// Syntax
/*
  if(condition){
    // run some code
  }else{
    // run some different code
  }
*/

let customerIsBanned = false;
let soup = "Checken noodle soup";
let crackers = true;
let reply;

if(customerIsBanned){
    reply = "No soup for you!";
}else if(soup && crackers){
    reply = `Here's your order of ${soup} & crackers.`;
}else if(soup){
    reply = `Here's your order of ${soup}`;
}else{
    reply = "Sorry, we're out of soup."
}
console.log(reply);


let age = 15

if(age >= 18){
  console.log("You are an adult");
}else{
  console.log("Your are under 18");
}

// This score follow by subjects

let gradeScore = 48;

if(gradeScore >= 90){
  console.log("Your grade is A (90->100) ");
}else if(gradeScore >= 80){
  console.log("Your grade is B (80->89) ");
}else if (gradeScore >= 70){
  console.log("Your grade is C (70->79) ");
}else if (gradeScore >= 60){
  console.log("Your grade is D (60->69) ");
}else if (gradeScore >= 50){
  console.log("Your grade is E (50->59) ");
}
else{
  console.log("Your grade is F (Fial for scored) ");
}

// B -> 80 -> 89
// C -> 70 -> 79
// D -> 60 -> 69
// E -> 50 -> 59