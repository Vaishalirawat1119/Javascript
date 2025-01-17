class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const NewUser = new User("John")
// console.log(NewUser.createId());  //we cannot access it 

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const user1 = new Teacher("bella", "bella@gmail.com");
// console.log(user1.createId());
user1.logMe();

