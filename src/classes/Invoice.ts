import { HasMessage } from '../interfaces/HasMessage'

export class Invoice implements HasMessage {

    constructor(
        readonly clientName: string,
        readonly details: string,
        readonly amountBGN: number
    ) {}

    message() {
        return `${this.clientName} owes ${this.amountBGN} for ${this.details}`;
    }
}