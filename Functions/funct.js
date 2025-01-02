function func(){
    console.log("a");
    console.log("b");
    console.log("c");
    console.log("d");
    console.log("e");
    console.log("f");
    console.log("g");
}

// func();


// function addTwoNumber(num1,num2){
//     console.log(num1+num2);
// }

function addTwoNumber(num1,num2){
    // let result = num1+num2;
    // console.log("hello");
    // return result;
    
    return num1+num2;
}    
const result = addTwoNumber(20,90);

// console.log(result);

function loginUserMessage(username){
    if(!username){
        console.log("Please provide a username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("V"));
// console.log(loginUserMessage(""));
console.log(loginUserMessage());