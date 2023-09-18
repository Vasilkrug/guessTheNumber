import {Guess} from "./guess.js";

const endOfRange = document.getElementById('range');
const guessInput = document.querySelector('.guess-input');
const guessButton = document.querySelector('.guess-button');

const guess = new Guess();

endOfRange.addEventListener('change', () => {
    const max = Number(endOfRange.value);
    guess.changeEndOfRangeNumber(max)
})