export class Guess {
    constructor() {
        this.count = 0;
        this.misses = [];
        this.conceivedNumber = null;
        this.endOfRangeNumber = 100;
    }

    changeEndOfRangeNumber(end) {
        this.endOfRangeNumber = end;
    }

}