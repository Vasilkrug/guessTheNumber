export class Guess {
    constructor() {
        this.count = 0;
        this.misses = [];
        this.conceivedNumber = null;
        this.endOfRangeNumber = 100;
        this.isVictory = false;
        this.currenState = 'Игра не началась';
        this.init();
    }

    init() {
        this.conceivedNumber = Math.floor(1 + Math.random() * (this.endOfRangeNumber + 1 - 1));
    };

    changeEndOfRangeNumber(end) {
        this.endOfRangeNumber = end;
        this.conceivedNumber = Math.floor(1 + Math.random() * (this.endOfRangeNumber + 1 - 1));
    };

    checkGuess(number) {
        this.count += 1;
        if (!this.isVictory) {
            if (number > this.conceivedNumber) {
                this.currenState = `Число ${number} слишком большое`;
                this.misses.push(`Число ${number} слишком большое`);
            } else if (number < this.conceivedNumber) {
                this.currenState = `Число ${number} слишком маленькое`;
                this.misses.push(`Число ${number} слишком маленькое`);
            } else {
                this.currenState = `Вы угадали! Вам потребовалось ${this.count} попыток`;
                this.isVictory = true;
            }
        }
    };

    clearGuess() {
        this.count = 0;
        this.misses = [];
        this.conceivedNumber = null;
        this.endOfRangeNumber = 100;
        this.isVictory = false;
        this.currenState = 'Игра не началась';
        this.init();
    };

}