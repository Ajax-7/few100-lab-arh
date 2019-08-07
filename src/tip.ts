import { percentToDecimal, add } from "./utils";

export function getUserBill(): number {
    let billElement = <HTMLInputElement>document.getElementById("user-bill");
    let userBill = parseInt(billElement.value);
    return userBill;
}

function negativeUserBill(): boolean {
    return (getUserBill() < 0) ? true : false;
    // return ((getUserBill() < 0) || (getUserBill().)) ? true : false;
}

function handleNegUserBill(): void {
    let billElement = <HTMLInputElement>document.getElementById("user-bill");
    let warnElement = <HTMLInputElement>document.getElementById("bill-warning");
    if (negativeUserBill()) {
        billElement.style.borderColor = '#FF0000';
        warnElement.innerHTML = "Please enter a positive number";
    } else {
        billElement.style.borderColor = '';
        warnElement.innerHTML = "";
    }
}

// export function getUserTipPrcnt(): void {
//     document.querySelector("tip-square.selected");
// }

export function getUserTipAmt(tipPrcnt: number, bill: number): number {
    return percentToDecimal(tipPrcnt) * bill;
}

export function getUserTotalBill(a: number, b: number): number {
    return add(a, b);
}

export function displayUserBill(userBill: number): void {
    handleNegUserBill();
    let displayElement = document.getElementById("display-bill");
    if (negativeUserBill()) {
        displayElement.innerHTML = '';
    } else {
        let currBill: string;
        (isNaN(userBill)) ? (currBill = "0") : currBill = userBill.toString();
        displayElement.innerHTML = currBill;
    }
}


export function displayUserTipPrcnt(userTip: number): void {
    let currTipPrcnt: string;
    (isNaN(userTip)) ? (currTipPrcnt = "0") : currTipPrcnt = userTip.toString();
    document.getElementById("display-tip-prcnt").innerHTML = currTipPrcnt + '%';
    document.getElementById("tip-choice").innerHTML = currTipPrcnt + '%';
}

export function displayUserTipAmt(userTip: number): void {
    let displayElement = document.getElementById("display-tip-amt");
    if (negativeUserBill()) {
        displayElement.innerHTML = '';
    } else {
        let currTipAmt: string;
        (isNaN(userTip)) ? (currTipAmt = "0") : currTipAmt = userTip.toString();
        displayElement.innerHTML = currTipAmt;
    }

}

export function displayUserTotalBill(userTotalBill: number): void {
    let displayElement = document.getElementById("display-total-bill");
    if (negativeUserBill()) {
        displayElement.innerHTML = '';
    } else {
        let currTotalBill: string;
        (isNaN(userTotalBill)) ? (currTotalBill = "0") : currTotalBill = userTotalBill.toString();
        displayElement.innerHTML = currTotalBill;
    }
}