//Generate random colors

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}


let intervalId;
// let colors = ['yellow', 'blue', 'grey', 'black', 'aliceblue', 'orange', 'brown'];
// let colorIndex = 0;


// startBtn.addEventListener('click', function(e){
//     e.preventDefault;
//     startBtn.disabled = true;
//     stopBtn.disabled = false;
//     if(!intervalId){
//         intervalId = setInterval(function(){
//             body.style.background = colors[colorIndex];
//             colorIndex = (colorIndex + 1) % colors.length;
//         }, 1000);
//     }
// })

// stopBtn.addEventListener('click', function(){
//     clearInterval(intervalId);
//     intervalId = null;
//     startBtn.disabled = false;
//     stopBtn.disabled = true;
// })



//code with random generateColor

const startChangingColor = function(){
    startChangingColor.disabled = true;
    stopChangingColor.disabled = false;
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000);
    };

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
};

 
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
    stopChangingColor.disabled = true;
    startChangingColor.disabled = false;
};


document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

