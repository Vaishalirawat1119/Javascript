const coding = ["js","pyhton","java","ruby","cpp"];

const values = coding.forEach( (item) => {
    console.log(item);
    // return item;
})

// console.log(values);   //undefined


const myNums = [1,2,3,4,5,6,7,8,9,10];
// const newNums = myNums.filter ( (num) => num <  4)

const newNums = myNums.filter((num) => {
    return num > 4;  //when we use block{} in arrow function, always use "return" for output 
})
// console.log(newNums);



//doing same thing by ForEach loop
const returnNum = [];
myNums.forEach((num) => {
    if(num<4){
        returnNum.push(num);
    }
})

console.log(returnNum);



const books = [
    {
        title: "1",
        genre: "horror",
        publish: 1981,
        edition: 2004
    },
    {
        title: "2",
        genre: "fantasy",
        publish: 1992,
        edition: 2008
    },
    {
        title: "3",
        genre: "non-fiction",
        publish: 1999,
        edition: 2007
    },
    {
        title: "4",
        genre: "fiction",
        publish: 1989,
        edition: 2010
    },
    {
        title: "5",
        genre: "science",
        publish: 2009,
        edition: 2014
    },
    {
        title: "6",
        genre: "history",
        publish: 1987,
        edition: 2010
    },
    {
        title: "7",
        genre: "history",
        publish: 2010,
        edition: 2019
    },
    {
        title: "8",
        genre: "mystery",
        publish: 1993,
        edition: 2000
    },
    {
        title: "9",
        genre: "drama",
        publish: 2000,
        edition: 2013
    },
    {
        title: "10",
        genre: "drama",
        publish: 1981,
        edition: 2004
    }
];

const userBooks = books.filter((bk)=> bk.genre === "history")
console.log(userBooks);

const bkPublish = books.filter((bk)=> bk.publish >= 2000)
console.log(bkPublish);

const filterBook = books.filter((bk) => bk.publish >= 1995 && bk.genre === "history")
console.log(filterBook);
