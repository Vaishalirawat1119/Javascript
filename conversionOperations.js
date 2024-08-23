let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueIntNumber = Number(score);
console.log(typeof valueIntNumber);
console.log(valueIntNumber);

// 33 => 33
// "33abc" => NaN (Not a Number)
// true => 1; false => 0

let boolNum = 1;

let booleanNum = Boolean(boolNum);
console.log(booleanNum);
console.log(typeof booleanNum);

// 1 => true; 0 => false
// "" => false
// "anyString" => true

let num = 33;

let numStr = String(num);
console.log(numStr);
console.log(typeof numStr);

// 33 => string