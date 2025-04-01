//Q1. Given the array const numbers = [10, 20, 30, 40];, use array destructuring to assign the first two elements of the array to variables a and b.

const numbers = [10,20,30,40];
const [a,b] = numbers;
console.log(a,b);

//Q2. Given the object const person = { name: 'John', age: 25, city: 'New York' };, use object destructuring to assign the values of name and age to variables name and age.

const person  = {name: 'John', age: 25, city: 'New York'};
const {name, age} = person;
console.log(name,age);

//Q3. Given the following object:
// const user = {
//   name: 'Alice',
//   address: { city: 'London', country: 'UK' },
// };
// Use destructuring to assign name, city, and country to separate variables.

const user = {
      name: 'Alice',
      address: { city: 'London', country: 'UK' },
};

const {name : userName, address:{city, country}} = user;
console.log(userName, city, country);

//Q4. Given the object const person = { name: 'Eve' };, use destructuring to assign name to a variable name and age to a variable age with a default value of 30.

const person1 = {name: 'Eve'};
const {name: personName, age1 = 30} = person1;
console.log(personName, age1);

//Q5. Given the array const numbers = [1, 2, 3, 4, 5];, use destructuring and the rest syntax to assign the first element to first and the remaining elements to rest.

const num = [1,2,3,4,5];
const [first, ...rest] = num;
console.log(first, rest);

//Q6. Swap the values of a = 10 and b = 20 using destructuring.

let aNum = 10;
let bNum = 20;
[aNum,bNum] = [bNum,aNum];
console.log(aNum,bNum);
