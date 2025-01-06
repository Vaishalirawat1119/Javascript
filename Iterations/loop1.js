// for loop

//syntax:
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


//basic example
let number = 1;
for(number = 1; number<= 10; number++){
    console.log(number);
}


//adding conditions in loop
for(let i=0; i<=20; i++){
    if(i===11){
        console.log("My favourite date " + i);
    }
    else{
        console.log(i);
    }

}


//counting of Outer loop and inner loop
for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop: ${i}`);
    
    for (let j = 0; j <= 5 ; j++) {
        console.log(`Inner loop value: ${j} and outer loop: ${i}`);   
    }
}


//printing table
for (let i = 1; i <= 10; i++) {
    console.log(`Table of: ${i}`);
    
    for (let j=1; j<=10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}


//loop on array
let myArr = ["apple", "banana", "mango", "pineapple", "watermelon"];
console.log(myArr.length);

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element);
}



//break and continue

for (let i = 1; i <= 20; i++) {
    if (i === 11) {
        console.log(`Detected 11`);
        break;
    }
    console.log(`Value of i is ${i}`);
}

for (let i = 1; i <= 30; i++) {
    if (i === 19) {
        console.log(`Detected 19`);
        continue;
    }
    console.log(`Value of i is ${i}`);
}