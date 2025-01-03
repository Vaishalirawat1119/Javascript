//nested function scope

function one(){
    const username = "John";

    function two(){
        const website = "google";
        console.log(website);
        console.log(username); //we can access username here
    }
    //console.log(website); //website is not accessible here
    two();
    
}
one();


if(true){
    const username = "Leo";
    if(username === "Leo"){
        const password = "1234";
        console.log(`username: ${username} password: ${password}`);
    }

    // console.log(password); //password is not accessible here
}

// console.log(username); //username is not accessible here



//Function Declaration

console.log(addOne(5)); //we can access addOne function here because it is function declaration
function addOne(num){
    return num + 1;
}
addOne(5); //we can access it here also


//addTwo(8); //we cannot access addTwo function here because it is function expression and we hold it in a variable 
const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(8)); 