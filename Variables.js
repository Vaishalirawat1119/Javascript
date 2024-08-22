// const means Constant so, it cannot be change even in future
const accountId = 144553

// let is block-scoped, meaning it is only accessible within the block where it is declared (e.g., within {}) 
let accountEmail = "abc123@gmail.com"

// var is function-scoped, meaning it is only accessible within the function where it's declared. If declared outside a function, it becomes globally scoped.
var accountPassword = "12345"

// we can write a values like this in Javascript but it is a bad practice.
accountCity = "Delhi"

// accountId = 2  //not allowed because it is already decleared with "const" keyword.

accountEmail = "cde12@gmail.com"
accountPassword = "addssdd"
accountCity = "Mumbai"

// this is the way to print individually in javascript 
console.log(accountId);

// whenever we have to print multiple values so we can use "console.table([])" , within square brackets [] we can write multiple values to print at a same type.
console.table([accountId,accountEmail,accountPassword,accountCity])

