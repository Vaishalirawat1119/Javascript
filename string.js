const name = "Vaishali";
const lastName = "Rawat";

//way to concarenate two strings.
console.log(`My name is ${name} ${lastName}`);

const myName = new String("Vaishali-vr");

// way to find index value
console.log(`index 2 = ${myName[2]} value`);

// find length of the string
console.log(`Length of the string is ${myName.length}`);

// All the words in the string become CAPITAL
console.log(`normal string is ${myName} and after using uppercase the string is ${myName.toUpperCase()}`);

// using charAt(), we can find the word on the requested index
console.log(`on the 5th index the value is : ${myName.charAt(5)}`);

// indexOf() returns the index of the requested value/word.
console.log(`word s is on the : ${myName.indexOf('s')} index`);

// subString(startNum, endNum)
console.log(`${myName.substring(2,7)}`);

// slice()
console.log(`${myName.slice(-11,8)}`);

const newString = new String("         hello i'm Vaishali    ");
// trim(), removes the white spaces.
console.log(`without using trim the string is: ${newString} and after using the trim function: ${newString.trim()}`);


let anotherString = new String("Java-script");
// replace() function replaces the word with the requested word.
console.log(`normal string is: ${anotherString} and after using replace function: ${anotherString.replace('-','')}`);

let lastString = new String("Tomorrow is sunday.");

// split() function splits the string into an array.
let word = lastString.split(' ');
console.log(word[2]); //expected output: sunday.

let character = lastString.split('');
console.log(character[5]);



