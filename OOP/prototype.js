// let myName = "John     ";
// console.log(myName.length);

let myArray = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
console.log(heroPower);
console.log(heroPower.getSpiderPower());

Object.prototype.john = function(){
    console.log(`John is present in all objects`);
}

Array.prototype.myMethod = function(){
    console.log(`This is my Method`);
}

// heroPower.myMethod();
myArray.myMethod();


//Inheritance

const User = {
    name: "user1",
    username: "user1@gmail.com"
};

const Teacher = {
    makeVideo: true
};

const TeachingSupport = {
    isAvailable: false
};

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
};

// outdated syntax
Teacher.__proto__ = User;

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);


let anotherUsername = "Bella   ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True Length is: ${this.trim().length}`);
}
anotherUsername.trueLength();
"Javascript      ".trueLength();
"hello".trueLength();