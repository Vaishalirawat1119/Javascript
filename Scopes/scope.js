// 1. Global Scope

let a = 1;
console.log(a);


// 2. Function Scope
function User(){
    let userName = "ABC";
    console.log(userName); //userName is accessible here
}
User();
//we cannot access userName outside the function
// console.log(userName);

// 3. Block Scope

{
    let b = 20;
    let num = 100;

    console.log(b); //b is accessible here
    console.log(num); //num is accessible here
    
}
//console.log(b); //b is not accessible here because it is block scoped variable 