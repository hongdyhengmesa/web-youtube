// Number 

// An integer is a whole number.
const myNumber = 42;

// A number with a decimal point is a float which references the "floating point"
const myFloat = 42.21;

const myString = "42.2333accd";

console.log(myNumber);
console.log(myFloat);
console.log(myNumber === myFloat);


// Number Methods

// The number isInteger() method determines whether the passed value is an integers
console.log(Number.isInteger(myString));

//  The Number parseFloat() method parses an argument and returns
//  a floating point Number. If a number can't be pased from the argument,
//  it returns NaN.
console.log(Number.parseFloat(myString));

/*
  -> The toFixed() method formats a number according to 
  how many decimal points you provide as the parameters.
*/
console.log(Number.parseFloat(myFloat).toFixed(2));

// convert string to the numbers
console.log(myFloat.toString());


// Chaining = Using serveral methods chained together
console.log(Number.parseFloat("4.237abc").toFixed(2).toString());

// NaN is an acronym for not a Number
/*
  1)The Number .isNaN() method determines whether the passed
  valur is NaN AND its type is Number.
  2)The global isNaN() function determines whether a value is
  NaN or not.
*/
console.log(Number("Dave"));
console.log(isNaN("Mesa"));