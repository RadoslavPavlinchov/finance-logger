class Invoice {
    // readonly clientName: string;
    // readonly details: string;
    // readonly amountBGN: number;

    constructor(
        readonly clientName: string,
        readonly details: string,
        readonly amountBGN: number
    ) {
        // this.clientName = a;
        // this.details = b;
        // this.amountBGN = c;
    }

    displayRecordMessage() {
        return `${this.clientName} owes ${this.amountBGN} for ${this.details}`;
    }
}

const invoiceOne = new Invoice('Gosho', 'front-end page', 1000);
const invoiceTwo = new Invoice('Ivan', 'back-end server', 1500);

const invoicesArr: Invoice[] = [];

invoicesArr.push(invoiceOne);
invoicesArr.push(invoiceTwo);

console.log(invoicesArr)
console.log(invoiceOne.displayRecordMessage())
