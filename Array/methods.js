let arr = [1,2,3,4,5,6,7];
console.log("original array1: ",arr);
arr.push(9); //it adds the element at the end of the array
console.log("after applying push method: ",arr);

arr.pop();
console.log("applying pop method: ",arr);

let arr2 = Array(1,2,3,4,5);
console.log("original array2: ",arr2);
arr2.push(6);
console.log("after applying push method: ",arr2);

arr2.pop(); //it removes the last element from the array
console.log("applying pop method: ",arr2);

let arr3 = Array(2,1,4,6,3);
console.log("original array: ",arr3);
arr3.unshift(4); //it adds the element at the beginning of the array
console.log("applying unshift method: ",arr3);

arr3.shift(); //it removes the first element from the array
console.log("applying shift method: ",arr3);

let arr4 = Array(1,4,2,6,7,8,3,1,8,1,4,9,4,6);
console.log("original array: ",arr4);
arr4.slice(2,6); //it returns the elements from index 2 to 6
console.log("applying slice method: ",arr4.slice(2,6));
console.log(arr4);

arr4.splice(2,6); //it removes the elements from index 2 to 6 and in original array too
console.log("applying splice method: ",arr4);
console.log(arr4);