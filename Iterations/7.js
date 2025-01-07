//Map method

const myNums =  [1,2,3,4,5,6,7,8,9,10];

const newNums = myNums.map((num)=> num + 10)
// console.log(newNums);


//doing the same operation by forEach
const anotherNum = [];

myNums.forEach((num) => {
    anotherNum.push(num+10);
})
// console.log(anotherNum);



//Chaining Method
const number = myNums
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 40)
console.log(number);