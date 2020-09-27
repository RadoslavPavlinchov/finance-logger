import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
// import { HasMessage } from './interfaces/HasMessage';
const form = document.querySelector('.new-item-form');
const typeOfRecord = document.querySelector('#type');
const senderOrReceiver = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
// ADD THE EVENT LISTENER FOR A 'submit'
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const recordMap = {
        'invoice': new Invoice(senderOrReceiver.value, details.value, amount.valueAsNumber),
        'payment': new Payment(senderOrReceiver.value, details.value, amount.valueAsNumber),
    };
    typeOfRecord.value === 'invoice'
        ? list.render(recordMap['invoice'], typeOfRecord.value, 'end')
        : list.render(recordMap['payment'], typeOfRecord.value, 'end');
});
