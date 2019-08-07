export function getInitTipValues() {
    let tipValues: number[] = [10, 15, 20];
    if (typeof (Storage) !== "undefined") {

    }
    return tipValues;
}
export function getInitTipSelect(): number {
    let initTipSelect: number = 1;
    console.log("before" + initTipSelect);
    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem("initTipPrcnt") === null) {
            localStorage.setItem('initTipPrcnt', initTipSelect.toString());
            console.log(`${initTipSelect} is null`);
        } else {
            initTipSelect = parseInt(localStorage.getItem("initTipPrcnt"));
            console.log(`${initTipSelect} is not null`);
        }
    }
    console.log("after" + initTipSelect);
    return initTipSelect;
}

export function setInitTipSelect(index: number): void {
    if (typeof (Storage) !== "undefined") {
        console.log(`before setInit` + index);
        localStorage.setItem('initTipPrcnt', index.toString());
        console.log(`after setInit` + index);
    }
}