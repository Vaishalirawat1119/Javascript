//Promise created...
const promise1 = new Promise((resolve, reject) => {
    //Do an async task....
    //DB calls, cryptography, network
    setTimeout(() => {
        console.log("Async task is complete");
        resolve();
    }, 1000);
});

promise1.then(()=>{    //.then = resolve
    console.log("Promise consumed");
});


// ------------------------------------------

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(() => {
    console.log("Async 2 resolved");
}); 


// ------------------------------------------

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: "John", email: "John01@example.com"});
    }, 1000);
});

promise3.then((user) => {
    console.log(user);
});


// ------------------------------------------

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "Bella", email: "bella02@example.com"});
        }
        else{
            reject("ERROR: Something went wrong");
        }
    }, 1000);
});

promise4.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
});


// ------------------------------------------

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({subName: "Javascript", password: "123456"});
        }
        else{
            reject("ERROR: JS went wrong");
        }
    }, 1000);
});

async function consumePromise5(){
    try {
        const respose = await promise5;
        console.log(respose);
    } catch (error) {
        console.log(error);
    }
};

consumePromise5();


// ------------------------------------------

//fetching information with try and catch function
async function getAllUsers(){
   try {
    const respose = await fetch("https://api.github.com/users/Vaishalirawat1119");
    // console.log(respose); 
    const data = await respose.json();
    console.log(data);
   } catch (error) {
    console.log("E: ", error);
   }
};
getAllUsers();


//fetching the information with .then() and .cath()
fetch("https://api.github.com/users/Vaishalirawat1119")
.then((respose) => {
    return respose.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log("error"));