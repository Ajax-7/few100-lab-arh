
export function add(a, b) {
    return a + b;
}

export function divide(a: number, b: number): number {
    return a / b;
}

export function percentToDecimal(a: number): number {
    return divide(a, 100);
}




export const PI = 3.1415;

// window["add"] = add;

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