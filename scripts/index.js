import {Guess} from "./guess.js";
import {needAClue} from "./utils.js";

const range = document.querySelectorAll('.end-range');
const guessInput = document.querySelector('.guess-input');
const guessButton = document.querySelector('.guess-button');
const resultText = document.querySelector('.result-text');
const guessesList = document.querySelector('.guesses-list');
const clue = document.querySelector('.clue');
const startNewGameBtn = document.querySelector('.start-game-button');


const guess = new Guess();

const draw = () => {
    resultText.innerHTML = guess.currenState;
    guessesList.innerHTML = guess.misses.map(item => {
        return `<li>${item}</li>`
    }).join('');
    drawClue();
};

const drawClue = () => {
    if (needAClue(guess.count) && !guess.isVictory) {
        clue.innerHTML = guess.conceivedNumber % 2 === 0 ? 'Число четное' : 'Число нечетное'
    } else {
        clue.innerHTML = '';
    }
};

range.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active');
        button.classList.add('active');
        const value = Number(button.innerHTML);
        guess.changeEndOfRangeNumber(value);
    });
})

guessButton.addEventListener('click', () => {
    const value = Number(guessInput.value);
    if (value > guess.endOfRangeNumber || value <= 0) {
        alert('Число должно находиться в диапазоне');
        return;
    }
    guess.checkGuess(value);
    draw();
    guessInput.value = '';
});

startNewGameBtn.addEventListener('click', () => {
    guess.clearGuess();
    draw();
})

draw();