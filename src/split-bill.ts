import { getUserTotalBill } from "./tip";
import { multiply } from "./utils";

export function getNumberPayers() {
    let payerElement = <HTMLInputElement>document.getElementById("number-payers");
    let payers = parseInt(payerElement.value);
    return payers;
}

function getTotalBillPerPerson() {
    return multiply(getNumberPayers(), getUserTotalBill());
}