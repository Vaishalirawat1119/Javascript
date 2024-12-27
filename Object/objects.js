// Objects

// declaration of symbol
const mySym = Symbol('key1');

const Student = {
    name : "John",
    fullName : "Doe",
    [mySym] : "key",
    age : 18,
    course : "BCA",
    email : "johndoe00@gmail.com",
    isPresent : true,
    marks : [78,89,90,56,78]
}

console.log(Student);
// console.log(typeof(Student.marks));