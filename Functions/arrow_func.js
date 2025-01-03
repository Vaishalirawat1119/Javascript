const user = {
    username: "john",
    price: 2000,

    welcomeMessage: function(){
        console.log(`Welcome ${this.username}`);
        console.log(this); //this refers the current context
        
    }
}
user.welcomeMessage();
user.username = "Bella";
user.price = 100;
user.welcomeMessage();

console.log(this); //this refers the global context

// function myFunc(){
//     let a = 10;
//     console.log(this.a);
// }
// myFunc(); //undefined because a is not defined in global context

//Arrow Function
const myFucn = () => {
    let a = 10;
    console.log(this);
}

myFucn(); 


//Basic version
const addTwoNum = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwoNum(5,10));


//Shorter version
const addTwoNums = (num1, num2) => num1 + num2;

console.log(addTwoNums(5,10));

// const addTwo = (num1, num2) => (num1 + num2);

const Name = (username) => ({username: "V"});
console.log(Name());
