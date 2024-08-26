console.log(Math);

// it will changes the negative value to positive value only
console.log(Math.abs(-100));

// Round() is used for round off the values
console.log(Math.round(3.5));

console.log(Math.ceil(6.9));
console.log(Math.floor(3.7));

console.log(Math.min(5,7,6,8));

console.log(Math.max(5,2,5,1,8,66));

// it will returns the value between 0-1
console.log(Math.random());
// for avoiding the 0
console.log(Math.random() * 10 + 1);

const min = 1;
const max = 6;

console.log(Math.floor(Math.random()*(max-min+1)) + min);
