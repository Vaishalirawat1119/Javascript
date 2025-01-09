const body = document.querySelector('body');
// console.log(backgroundColor);
const colorButtons = document.querySelectorAll('.button');
// console.log(colorButtons);
const h1 = document.querySelector('h1');
const h3 = document.querySelector('h3');


colorButtons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', ((e) => {
        console.log(e);
        console.log(e.target);

        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
            h1.style.color = 'white';
            h3.style.color = 'white';
        }
        else if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
            h1.style.color = 'black';
            h3.style.color = 'black';
        }
        else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
            h1.style.color = 'white';
            h3.style.color = 'white';
        }
        else{
            console.log('Invalid color');
        }
    }));
});