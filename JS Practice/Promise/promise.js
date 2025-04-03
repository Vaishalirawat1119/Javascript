const myPromise =  new Promise((res,rej) => {
    let success = false;

    setTimeout(() => {
        if(success){
            console.log("Promise resolved");
        } else{
            console.log("Failed");
        }
    }, 2000);
});