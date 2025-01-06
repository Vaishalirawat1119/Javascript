//conditional statement

//check Temperature
const temp = 50;

if(temp <= 50){
    console.log("yes");
}
else{
    console.log("no");
}


//check score
const score = 200;

if( score >= 100){
    const power = "fly";
    console.log(`User power: ${power}`);
}


//check balance
const balance = 2000;

if(balance >= 5000) console.log("You can withdraw");
//or
if(balance < 500){
    console.log("less");
}
else if (balance < 1000){
    console.log("medium");
}
else{
    console.log("high: " + balance);
}


//check user login
const isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(isUserLoggedIn && debitCard){
    console.log("User can make payment");
}
else{
    console.log("User cannot make payment");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User can login");
}
else{
    console.log("User cannot login");
}