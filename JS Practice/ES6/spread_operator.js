//Q1. Given the array const arr = [10, 20, 30, 40];, create a new array newArr that is a copy of arr.

const arr = [10, 20, 30, 40];
const newArr = [...arr];
console.log(newArr);

//Q2. You have two arrays const arr1 = [1, 2, 3]; and const arr2 = [4, 5, 6];. Merge them into a single array.

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const mergeArr = [...arr1,...arr2];
console.log(mergeArr);

//Q3. Given an object const person = { name: 'John', age: 25 }; and const address = { city: 'New York', country: 'USA' };. Merge them into a new object newObj.

const person = { name: 'John', age: 25 };
const address = { city: 'New York', country: 'USA' };
const infoObj = {...person,...address};
console.log(infoObj);

//Q4. You have the array const fruits = ['apple', 'banana'];. Add 'orange' and 'grape' to the end of this array using the spread operator.

const fruits = ['apple', 'banana'];
const newFruits = [...fruits, 'orange', 'grape'];
console.log(newFruits);

//Q5. Write a function sum(a, b, c) that accepts three arguments. Call this function using the spread operator, passing an array [1, 2, 3] as the arguments.

const sum = (a,b,c) => {return a+b+c};
const nums = [1,2,3];
console.log(sum(...nums));

//Q6. Given the object const user = { name: 'Eve', address: { city: 'London', country: 'UK' } };, use the spread operator to create a shallow copy of user. Explain why this is not a deep clone.

const user = {name: 'Eve', address: {city: 'London', country: 'UK'}};
const userCopy = {...user};
console.log(userCopy);

//Q7. Given the array const numbers = [1, 2, 3, 4, 5];, create a new array without the number 3 using the spread operator.

const number = [1,2,3,4,5];
const newNumberArray = [...number.slice(0,2),...number.slice(3)];
console.log(newNumberArray);

//Q8. You have the object const person = { name: 'Tom', age: 40 };. Using the spread operator, create a new object with the same properties as person but with the age property changed to 45.

const person1 = {name: 'Tom', age: 40};
const newPerson = {...person1, age: 45};
console.log(newPerson);

//Q9. Combine the array [1, 2, 3] with the static values 4, 5, and 6 to form a new array [1, 2, 3, 4, 5, 6].

const array1 = [1,2,3];
const staticValues = [4,5,6];
const combinedArr = [...array1,...staticValues];
console.log(combinedArr);
