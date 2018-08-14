window.addEventListener('load', init);

//Globals

//levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}
// Level Select
const currentLevel = levels.easy;


let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'abstract',
    'addEventListener',
    'alert',
    'any',
    'applicationCache',
    'as',
    'async',
    'atob',
    'AbortController',
    'AbortSignal',
    'ActiveXObject',
    'AnalyserNode',
    'ANGLE_instanced_arrays',
    'Animation'
];

//Initialize Game
function init() {
    console.log('Game Initialized');
    //load word from array
    showWord(words);
    //start matching on word input
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
    //Check game status
    setInterval(checkStatus, 50);
}
//Start match
function startMatch() {
    if (matchWords()) {
        //console.log('Match.')
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}
// Match currentWord to wordInput
function matchWords() {
    if (wordInput.value === lcase(currentWord.innerHTML)) {
        message.innerHTML = 'Correct! Keep Going!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}



//Pick &show random word
function showWord(words) {
    //Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output random word
    currentWord.innerHTML = words[randIndex];
}

//Countdown
function countdown() {
    // make sure time is not run out
    if (time > 0) {
        //decrement
        time--;
    } else if (time === 0) {
        //Game Over
        //  console.log('Game Over');
        isPlaying = false;

    }
    //Show time
    timeDisplay.innerHTML = time;
}

//Check status
function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over.Try Again?';
        score = -1;
    }
}