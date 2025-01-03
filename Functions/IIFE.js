// Immediately Invoked Function Expression (IIFE)
// IIFE is a function that is executed right after it is created 

(function DB(){
    //named IIFE
    console.log(`DB connected`);
})();

( () => {
    console.log(`DB connected 2`);
})();

( (username) => {
    //simple IIFE
    console.log(`DB connected ${username}`);
})("john");
