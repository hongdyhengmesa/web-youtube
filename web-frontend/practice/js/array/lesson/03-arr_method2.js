let numbers = [10, 20, 30, 40, 50];

console.log(numbers.indexOf(30));
console.log(numbers.includes(100))

let subArr = numbers.slice(1, 3)
console.log(subArr)

numbers.splice(2,1)
console.log(numbers)
