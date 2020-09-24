"use strict";
var Invoice = /** @class */ (function () {
    // readonly clientName: string;
    // readonly details: string;
    // readonly amountBGN: number;
    function Invoice(clientName, details, amountBGN) {
        this.clientName = clientName;
        this.details = details;
        this.amountBGN = amountBGN;
        // this.clientName = a;
        // this.details = b;
        // this.amountBGN = c;
    }
    Invoice.prototype.displayRecordMessage = function () {
        return this.clientName + " owes " + this.amountBGN + " for " + this.details;
    };
    return Invoice;
}());
var invoiceOne = new Invoice('Gosho', 'front-end page', 1000);
var invoiceTwo = new Invoice('Ivan', 'back-end server', 1500);
var invoicesArr = [];
invoicesArr.push(invoiceOne);
invoicesArr.push(invoiceTwo);
console.log(invoicesArr);
console.log(invoiceOne.displayRecordMessage());
