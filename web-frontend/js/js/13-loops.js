let nameMe = "Mesa";
let counter = 0;
let myLetter;
while(counter <= 3){
    myLetter = nameMe[counter];
    console.log(myLetter);
    if(counter === 1){
        counter += 2;
        continue;
    }
    if(myLetter === "v") break;
    counter++;
}
console.log(counter);