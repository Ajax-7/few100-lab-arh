import { divide } from "./utils";
import { negativeUserBill } from "./tip";

export function getNumberPayers(): number {
    let payerElement = <HTMLInputElement>document.getElementById("number-payers");
    let payers = parseInt(payerElement.value);
    return payers;
}

export function getTotalBillPerPerson(numberPayers: number, totalBill: number) {
    return (isNaN(numberPayers)) ? divide(totalBill, 1)
        : divide(totalBill, getNumberPayers());
}

export function displayTotalBillPerPerson(totalBill: number): void {
    let numberPayers: number = getNumberPayers();
    if (toggleBillPerPersonSectionOn(numberPayers)) {
        let displayElement = document.getElementById("display-bill-per-person");
        if (negativeUserBill()) {
            displayElement.innerHTML = '';
        } else {
            let totalBillPerPerson = getTotalBillPerPerson(numberPayers, totalBill);
            let currTotalBillPerPerson: string;
            (isNaN(totalBillPerPerson)) ? (currTotalBillPerPerson = "0") : currTotalBillPerPerson = totalBillPerPerson.toString();
            displayElement.innerHTML = currTotalBillPerPerson;
        }
    }
}

export function toggleBillPerPersonSectionOn(numberPayers: number): boolean {
    let tr = document.getElementById("bill-per-person-section");
    if (numberPayers > 1) {
        tr.style.display = '';
        return true;
    } else {
        tr.style.display = 'none';
        return false;
    }

}