let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.getElementById('subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const restart = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
};

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number.");
    }
    else if(guess < 1){
        alert("Please enter a number more than 1.")
    }
    else if(guess > 100){
        alert("Please enter a number less than 100.")
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 11){
            cleanUpGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNum}`);
            endGame();
        }
        else{
            cleanUpGuess(guess);
            checkGuess(guess);
        }
    }
};

function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(`Congratulations! You found the number in ${numGuess} guesses.`);
        endGame();
    }
    else if(guess < randomNum){
        displayMessage('number is TOO LOW!');
    }
    else if(guess > randomNum){
        displayMessage('number is TOO HIGH!');
    }
};

function cleanUpGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
};

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
};

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    restart.appendChild(p);
    playGame = false;
    newGame();
};

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', (e) => {
        randomNum = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        restart.removeChild(p);

        playGame = true;
    })
};