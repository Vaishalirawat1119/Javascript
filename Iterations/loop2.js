//While loop

//syntax:
// while (condition) {
    
// }


let num = 0;
while(num <= 20){
    console.log(`Value of number is: ${num}`);
    num = num+2;
}

let myArr = ["john", "bella", "edward", "jacob", "alice"];
let arr = 0;

while(arr < myArr.length){
    console.log(myArr[arr]);
    arr++;
}




//do-while

//syntax:
// do {
    
// } while (condition);


let score = 1;
do {
    console.log(`Score is: ${score}`);
    score++;
} while (score <= 10);