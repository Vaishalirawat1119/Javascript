//how to declare object as constructor/singleton

const fbUser = new Object();

fbUser.id = "12ab3";
fbUser.name = "Bella";
fbUser.isLoggedIn = false;

// console.log(fbUser);

const user = {
    email: "user@gmail.com",
    fullName: {
        firstName: "Bella",
        lastName: "Smith"
    },
    personalDetails: {
        age: 25,
        phoneNo:{
            mobile: 1233455331,
            landline: 1234567890
        },
        company: {
            cName: "ABC",
            cLoaction: "Delhi",
            cRole: "Software Developer" 
        }
    }
}

// console.log(user.email);
// console.log(user.personalDetails.company.cName);


const obj1 = {
    1: "a",
    2: "b",
    3: "c",
}

const obj2 = {
    4: "d",
    5: "e",
    6: "f",
}

// console.log(obj1,obj2);

// const obj3 = {obj1,obj2};
// console.log(obj3);

// const obj3 = Object.assign({},obj1,obj2);


// using spread operator
const obj3 = {...obj1,...obj2};
// console.log(obj3);


const obj4 = [
    {
        id: 1,
        name: "john",
        email: "john@gmail.com"
    },
    {
        id: 2,
        name: "smith",
        email: "smith@gmail.com"
    },
    {
        id: 3,
        name: "bella",
        email: "bella@gmail.com"
    },
    {
        id: 4,
        name: "charles",
        email: "charles@gmail.com"
    }
]

const result = obj4[2].email;
// console.log(result);

// console.log(fbUser);

console.log(Object.keys(fbUser));

console.log(Object.values(fbUser));

console.log(Object.entries(fbUser));

console.log(fbUser.hasOwnProperty('isLoggedIn'));

console.log(fbUser.hasOwnProperty('isLogged'));
