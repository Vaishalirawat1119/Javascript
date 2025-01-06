//for-each loop

const coding = ["js","ruby","python","java","c++"];

coding.forEach(val => {
    console.log(val);
})


coding.forEach( function(val) {
    console.log(val);
} )


coding.forEach( (val) => {
    console.log(val);
} )


function printMe(item){
    console.log(item);
}

coding.forEach(printMe);


coding.forEach( (item, index, arr) => {
console.log(item,index,arr);
} )


const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
})