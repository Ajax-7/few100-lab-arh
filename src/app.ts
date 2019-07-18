import './styles.css';
import { add, divide, percentToDecimal } from './utils';


export function runApp() {
    let userBill: number = 1;
    let userTipPrcnt: number;
    let userTipAmt: number;
    userBill = getUserBill();
    //1. need to accept users bill input (U INPUT)
    //1.1 need to return bill (value x)

    userTipPrcnt = getUserTipPrcnt();
    //2. Need to accept users tip percent, default 15%; (U INPUT)
    //2.1. need to return  tipping percent (value y)
    //2.2 need to convert/return tipping percent as decimal (value y2 = y/100)
    userTipAmt = getUserTipAmt(userTipPrcnt, userBill)
    //2.3 need to display tipping percent (DISPLAY)


    //3. Need to calculate/return amount of tip (value z = x * y2)
    getUserTotalBill(userBill, userTipAmt);
    //3.1 Need to display amount of tip (DISPLAY)

    //4 Need to calculate/return total to be paid (value q)
    //4.1 Need to display total (DISPLAY)
}

function getUserBill(): number {
    let userBill = parseInt(document.getElementById("user-bill").nodeValue);
    document.getElementById("display-bill").innerHTML = userBill.toString();
    return userBill;
}

function getUserTipPrcnt(): number {
    let a: number = 15;
    return a;
}

function getUserTipAmt(a: number, b: number): number {
    return percentToDecimal(a) * b;
}

function getUserTotalBill(a: number, b: number): number {
    return add(a, b);
}