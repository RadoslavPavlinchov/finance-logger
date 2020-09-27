export class Invoice {
    constructor(clientName, details, amountBGN) {
        this.clientName = clientName;
        this.details = details;
        this.amountBGN = amountBGN;
    }
    message() {
        return `${this.clientName} owes ${this.amountBGN} for ${this.details}`;
    }
}
