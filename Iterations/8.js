//Reduce method

const myNumber = [1,2,3,4,5];

const myTotal = myNumber.reduce(function (acc,currVal) {
    console.log(`accumulator: ${acc} ------ currentValue: ${currVal}`);
    return acc + currVal
}, 0)
console.log(myTotal);


//with Arrow function
const result = myNumber.reduce((acc,currVal)=> acc+currVal ,0);
console.log(result);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python ourse",
        price: 999
    },
    {
        itemName: "react course",
        price: 3599
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
];

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price , 0)
console.log(priceToPay);
