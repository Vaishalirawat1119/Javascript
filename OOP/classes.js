class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }
    changeUsername(){
        return `${this,this.username.toUpperCase()}`
    }
}
const some = new User("User1", "q1@gmail.com", "1234");
console.log(some.encryptPassword());
console.log(some.changeUsername());


// Behind the scene
function User1(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User1.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User1.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}
const some2 = new User("charles", "q2@gmail.com", "1234");
console.log(some2.encryptPassword());
console.log(some2.changeUsername());