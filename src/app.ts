import './styles.css';
import { add, divide, percentToDecimal } from './utils';
import { getUserBill, getUserTipAmt, getUserTotalBill, displayUserBill, displayUserTipAmt, displayUserTotalBill, displayUserTipPrcnt } from './tip';
import { getDefaultInitTypeValues, getInitUserTipSelect, setInitUserTipSelect } from './init';
import { displayTotalBillPerPerson, getNumberPayers, toggleBillPerPersonSectionOn } from './split-bill';

let tipOptions: NodeList;
const tipValues: number[] = getDefaultInitTypeValues();
let userTipPrcnt: number;

export function runApp() {

    toggleBillPerPersonSectionOn(getNumberPayers());
    setupTipSelection();
    document.getElementById("user-bill")
        .addEventListener("input", () => updateValues(userTipPrcnt));
    document.getElementById('number-payers')
        .addEventListener('input', () => updateValues(userTipPrcnt));


}
function setupTipSelection() {
    tipOptions = document.querySelectorAll('.tip-square')
    let initPrcnt: number = 0;
    tipOptions.forEach((tipOption, index) => {
        const that = tipOption as HTMLElement;
        that.classList.remove('selected');
        let tipValue = tipValues[initPrcnt];

        that.innerHTML = tipValue.toString() + '%';
        if (index === getInitUserTipSelect()) {
            that.classList.add('selected');
            that.removeEventListener('click', handleClick);
            userTipPrcnt = tipValue;
        } else {
            that.addEventListener('click', handleClick);
        }
        initPrcnt += 1;
    })
}

function updateValues(_userTipPrcnt: number) {

    let userBill: number;
    let userTipPrcnt = _userTipPrcnt;
    let userTipAmt: number;
    let userTotalBill: number;

    userBill = getUserBill();
    displayUserBill(userBill);
    displayUserTipPrcnt(userTipPrcnt);

    userTipAmt = getUserTipAmt(userTipPrcnt, userBill);
    displayUserTipAmt(userTipAmt);

    userTotalBill = getUserTotalBill(userBill, userTipAmt);
    displayUserTotalBill(userTotalBill);
    displayTotalBillPerPerson(userTotalBill);

}




function handleClick(evt) {
    const that = this as HTMLElement;
    tipOptions = document.querySelectorAll('.tip-square');
    let i = 0;
    let tipIndex = 0;
    tipOptions.forEach((tipOption, index) => {
        const those = tipOption as HTMLElement;
        if (tipOption === that) {
            tipIndex = i;
        } else {
            those.classList.remove('selected');
            those.addEventListener('click', handleClick);
            i += 1;
        }
    });
    that.classList.add('selected');
    setInitUserTipSelect(tipIndex);
    userTipPrcnt = tipValues[tipIndex];
    that.removeEventListener('click', handleClick);
    updateValues(userTipPrcnt);

}

//1. need to accept users bill input (U INPUT)
    //1.1 need to return bill (value x)


    //2. Need to accept users tip percent, default 15%; (U INPUT)
    //2.1. need to return  tipping percent (value y)
    //2.2 need to convert/return tipping percent as decimal (value y2 = y/100)

    //2.3 need to display tipping percent (DISPLAY)


    //3. Need to calculate/return amount of tip (value z = x * y2)

    //3.1 Need to display amount of tip (DISPLAY)

    //4 Need to calculate/return total to be paid (value q)
    //4.1 Need to display total (DISPLAY)