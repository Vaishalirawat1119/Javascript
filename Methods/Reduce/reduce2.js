// Counting occurrences

const fruit = ["apple","banana","apple","pineapple","watermelon","watermelon","watermelon"];
const countOccurrence = fruit.reduce((occ,currVal)=>{
    if(occ[currVal]){
        occ[currVal]++;
    }
    else{
        occ[currVal] = 1;
    }
    return occ;
}, {});

console.log(countOccurrence);
