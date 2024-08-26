const num = 190;
console.log(num);

// the Number object is defining the type of variable
const number = new Number(1000);
console.log(number); 

console.log(number.toString());
// toString method changes the type of number, that is number to string

console.log(number.toString().length);
// it will return the length of the variable  

console.log(number.toFixed(3));
// it will round the number to a specified number of decimal places and return the result as a string.

const newNumber = new Number(223.4411);
// Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
console.log(newNumber.toPrecision(2));

const anotherNumber = new Number(23451123);
// Converts a number to a string by using the current or specified locale.
console.log(anotherNumber.toLocaleString('en-IN'));




