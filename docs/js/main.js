window.addEventListener('load', init);

//Globals

let time = 5;
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
    // Call countdown every second
    setInterval(countdown,1000);
}

//Pick &show random word
function showWord(words) {
    //Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output random word
    currentWord.innerHTML = words[randIndex];
}

//Countdown
function countdown(){
// make sure time is not run out
if(time >0){
    //decrement
    time --;
}else if (time === 0){
    //Game Over
    console.log('Game Over');
    isPlaying= false;

}
//Show time
timeDisplay.innerHTML = time;
}

}