import { percentToDecimal, add } from "./utils";

export function getUserBill(): number {
    let userBill = parseInt((<HTMLInputElement>document.getElementById("user-bill")).value);
    return userBill;
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
    let currBill: string;
    (isNaN(userBill)) ? (currBill = "0") : currBill = userBill.toString();
    document.getElementById("display-bill").innerHTML = currBill;
}


export function displayUserTipPrcnt(userTip: number): void {
    let currTipPrcnt: string;
    (isNaN(userTip)) ? (currTipPrcnt = "0") : currTipPrcnt = userTip.toString();
    document.getElementById("display-tip-prcnt").innerHTML = currTipPrcnt + '%';
    document.getElementById("tip-choice").innerHTML = currTipPrcnt + '%';
}

export function displayUserTipAmt(userTip: number): void {
    let currTipAmt: string;
    (isNaN(userTip)) ? (currTipAmt = "0") : currTipAmt = userTip.toString();
    document.getElementById("display-tip-amt").innerHTML = currTipAmt;
}

export function displayUserTotalBill(userTotalBill: number): void {
    let currTotalBill: string;
    (isNaN(userTotalBill)) ? (currTotalBill = "0") : currTotalBill = userTotalBill.toString();
    document.getElementById("display-total-bill").innerHTML = currTotalBill;
}