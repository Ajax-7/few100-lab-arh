export function getDefaultInitTypeValues() {
    return [10, 15, 20];
}

export function getInitUserTipSelect(): number {
    let initTipSelect: number = 1;
    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem('initTipPrcnt') === null) {
            localStorage.setItem('initTipPrcnt', initTipSelect.toString());
        } else {
            initTipSelect = parseInt(localStorage.getItem("initTipPrcnt"));
        }
    }
    return initTipSelect;
}

export function setInitUserTipSelect(index: number): void {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem('initTipPrcnt', index.toString());
    }
}

