// basic comparisions
console.log(2 > 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 != 1);

// let's try comparisions with string
console.log("2" > 1);
console.log("2" == 2);
// the above comparision's output is true because it only checks the values, if the values are same then it will return true.


console.log(null > 0);     //false
console.log(null == 0);    //false
console.log(null >= 0);    //true

console.log(undefined > 0);     //false
console.log(undefined == 0);    //false
console.log(undefined >= 0);    //true


// strict comparisions (===)
console.log("2" === 2); //it will return false because strict comp. checks the values and its data type; here we have 2 in the strings and we compare with numerical 2, so the values are same but their datatypes are different so that's why it returns false.
