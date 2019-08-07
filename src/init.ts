export function getDefaultInitTypeValues() {
    return [10, 15, 20];
}

export function getInitUserTipSelect(): number {
    let initTipSelect: number = 1;
    if (typeof (Storage) !== "undefined") {
        if (sessionStorage.getItem('initTipPrcnt') === null) {
            sessionStorage.setItem('initTipPrcnt', initTipSelect.toString());
        } else {
            initTipSelect = parseInt(sessionStorage.getItem("initTipPrcnt"));
        }
    }
    return initTipSelect;
}

export function setInitUserTipSelect(index: number): void {
    if (typeof (Storage) !== "undefined") {
        sessionStorage.setItem('initTipPrcnt', index.toString());
    }
}

