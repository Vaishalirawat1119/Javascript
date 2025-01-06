//for-in loop

const myObj = {
    js : 'Javascript',
    cpp : 'C++',
    py : 'Python',
    rb : 'Ruby',
    swift : 'Switch by Apple'
}

for (const key in myObj) {
    console.log(key, ':-', myObj[key]);
}


const programming = ['js','cpp','rb','py','java'];

for (const key in programming) {
    console.log(key, ':-', programming[key]); 
}


// const animal = new Map()
// animal.set('dog', 'black')
// animal.set('cat', 'white')
// animal.set('bird', 'yellow')
// animal.set('fish', 'green')
// animal.set('horse', 'brown')

// for (const key in animal) {
//     console.log(animal[key]);
// }  ------> ERROR <--------  MAP is not Iterable