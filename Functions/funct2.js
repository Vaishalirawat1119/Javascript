function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(20,2000,211));

function calculateCartPrice2(val1,val2,...num1){
    return num1;
}

// console.log(calculateCartPrice2(20,2000,211,5000));

const user = {
    username: "john",
    price: 2000,
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username: "bella",  price: 100
});

const myNewArray = [200,400,100,500];

function returnSecondValue(getArray){
    return getArray[5];
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,400,100,500,600,700]));
