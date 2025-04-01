test();  //hoisiting

function test(){
    let a = 2;
    console.log(a);
}

// console.log(a); //error


test();


function testOne(){
    if(true){
        const b = 1;
        console.log(b);
        
    }
    // console.log(b); //error
    
}

testOne();