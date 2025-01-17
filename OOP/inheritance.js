class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const student1 = new Teacher("ram", "ram1@gmail.com", "3456");
student1.addCourse();
student1.logMe();

const student2 = new User("John");
// student2.addCourse();  //cannot access
student2.logMe();

console.log(student1 === student2);   //false
console.log(student1 === Teacher);   //false
console.log(student1 === student2);   //false
console.log(student1 instanceof Teacher);   //true
console.log(student1 instanceof User);   //true
