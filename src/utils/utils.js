export function cssAndPhysicalPixelRatio() {
    /*
        devicePixelRatio should be the ratio of CSS pixel size and physical pixel size, so
        when zoom level in browser equals 100%, DPR should be equal to 1, but it's not.
        DPR = 1 when zoom level = 80%
        That's why there is 0.8
    */
    return window.devicePixelRatio / 0.8
}

export function isNumber(n) {
    return !isNaN(n) && isFinite(n) && (typeof (n) === "number");
}