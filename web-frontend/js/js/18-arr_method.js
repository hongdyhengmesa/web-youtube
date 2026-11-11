// array method
const myArr = [];

myArr[0] = "Mesa";
myArr[1] = 1011;
myArr[2] = false

// method of this array
myArr.push("itc"); // push add new items to array.
console.log(myArr)

myArr.pop(); // pop remove last items of array.
console.log(myArr)

myArr.unshift(32); // unshift add the first item to array
console.log(myArr)

myArr.splice(1,1, 42); // slice used for delete and add items of array
console.log(myArr)

// Another for example about array
const myArr1 = ["A", "B", "C", "D", "E", "F"];

const newArr = myArr1.slice(2,5);
console.log(newArr);

myArr1.reverse(); // reverse used for up to down (1,2,3,4 -> 4,3,2,1)
console.log(myArr1)

const newString = myArr1.join()
console.log(newString)

const newArr1 = newString.split(" , ");
console.log(newArr1)

console.log("-----------------------------------------------");

const myArrA = ["A", "B", "C"];
const myArrB = ["D", "E", "F"];

const newMyArr = myArrA.concat(myArrB); // concat combine together.
console.log(newMyArr)

// Nested array
const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

// 1D array
console.log(equipShelfA[1]);
console.log(clothesShelfB[0]);

// 2D array
const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept[0][1]);
console.log(clothesDept[0][1]);

// 3D array
const sportsStore = [equipDept, clothesDept]
console.log(sportsStore[0][0][1])
console.log(sportsStore[1][1][0])