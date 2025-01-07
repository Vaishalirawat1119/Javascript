// Find maximum number in array using reduce method.

//with positive number
const maxNum = [2,5,9,3,1];
const maximum = maxNum.reduce((max, currVal) => {
    return currVal > max ? currVal : max;
}, 0);

console.log(maximum);


//with negative number
const maxNegNum = [-5,8,-5,-2];
const result = maxNegNum.reduce((max,currVal)=>{
    return currVal > max ? currVal : max;
}, -Infinity);

console.log(result);
