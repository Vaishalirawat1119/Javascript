const userEmail = [];

if (userEmail) {
    console.log("User email is present");
}
else{
    console.log("User email is not present");
}

//flasy values
//false, 0 , -0, BigInt -> 0n , "", null, undefined, NaN

//truthy values
//true, 1, -1,"0", " ", [], {}, function(){}, "false", "null", "undefined", "NaN", "true"


if (userEmail.length === 0) {
    console.log("array is empty");
}

const empObj = {};

if (Object.keys(empObj)) {
    console.log("Object is empty");   
}

//Nullish coalescing operator (??) : null and undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;

val1 = null ?? 10 ?? 100;

console.log(val1);


//Terinary operator

// condition ? true : false;

const iceTeaPrice = 100;

iceTeaPrice >= 90 ? console.log("yes") : console.log("no");
