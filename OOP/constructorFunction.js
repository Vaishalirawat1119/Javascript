// Constructor

//New keyword is used to make new context that is called constructor function.
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}


//its a bad practice
const User1 = User("John", 10, true);
const User2 = User("Bella", 2, false);
console.log(User1); //overwrites the value of User1 and prints User2's values. 



// Constructor function gives us a new instance/copy everytime.
const User3 = new User("John", 10, true);
const User4 = new User("Bella", 2, false);
console.log(User4);