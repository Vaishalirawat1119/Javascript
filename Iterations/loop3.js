//for-of loop

const arr = [1,2,3,4,5];

for (const val of arr) {
    console.log(val);   
}


const greetings = "Hello World!";
for (const greet of greetings) {
    console.log(greet);   
}


//Maps

const map = new Map()
map.set('IN',"India");
map.set('US',"United States of America");
map.set('UK',"United Kingdom");
map.set('Fr',"France");
// map.set('IND',"India");

console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-', value);
}

const myObj = {
    game1 : 'NFS',
    game2 : 'GTA',
    game3 : 'FIFA',
}

// for (const [,value] of myObj) {
//     console.log(key, ':-', value);   
// }    ----> ERROR - myObj is not iterable
