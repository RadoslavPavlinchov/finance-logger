import { HasMessage } from '../interfaces/HasMessage'

export class Payment implements HasMessage {

    constructor(
        readonly recipient: string,
        readonly details: string,
        readonly amountBGN: number
    ) {}

    message() {
        return `${this.recipient} is owed ${this.amountBGN}BGN for ${this.details}`;
    }
}