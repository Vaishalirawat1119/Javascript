//Flatten a nested array (2D to 1D)

const twoDimArr = [[1,4],[5,8],[2,5]];
const oneDimArr = twoDimArr.reduce((acc,currVal) => {
    if(Array.isArray(currVal)){
        acc = acc.concat(currVal);
    }
    else{
        acc.push(currVal);
    }
    return acc;
}, [])

console.log(oneDimArr);



//using Flat method

const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
const flattenArray = nestedArray.flat(Infinity);

console.log(flattenArray);
