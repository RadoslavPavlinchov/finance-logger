export class Payment {
    constructor(recipient, details, amountBGN) {
        this.recipient = recipient;
        this.details = details;
        this.amountBGN = amountBGN;
    }
    message() {
        return `${this.recipient} is owed ${this.amountBGN}BGN for ${this.details}`;
    }
}
