//basic function
//Q1.
// function multiply(a, b){
//     return a * b;
// }
// console.log(multiply(2,6));


//arrow function
const add = (a,b) => a+b;
console.log(add(2,4));


//basic function
//Q2.
// function sum(num1, num2){
//     return num1 + num2
// }

// sum(40,2)
// sum(42,0)
// console.log("the answer to everything is", sum(42,0))

//arrow function
const sum = (num1,num2) => {return num1 + num2};
console.log(sum(2,6));

//basic function
//Q3.
// function stringLength(str){
//     console.log(`the length of "${str}" is:`, str.length)
// }

// let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"
// stringLength(longestCityNameInTheWorld)

//arrow function
const stringLength = (str) => {console.log(`The length of "${str}" is:`, str.length)};
let words = "asdjfgvuiaergvajsfnv afvuiaeisfudhguiawifhsaieufhauieshgv";
stringLength(words);
