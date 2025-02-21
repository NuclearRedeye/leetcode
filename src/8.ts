const maxInt = Math.pow(2, 31) - 1;
const minInt = Math.pow(2, 31) * -1;
function myAtoi(s: string): number {
    let retVal = parseInt(s.trim());
    if (Number.isNaN(retVal)) {
        retVal = 0;
    }
    else if (retVal > maxInt) {
        retVal = maxInt;
    }
    else if (retVal < minInt) {
        retVal = minInt;
    }
    return retVal;
};

console.assert(myAtoi("42") === 42, "'42' converted MUST equal 42");
console.assert(myAtoi("   -042") === -42, "'   -042' converted MUST equal -42");
console.assert(myAtoi("1337c0d3") === 1337, "'1337c0d3' converted MUST equal 1337");
console.assert(myAtoi("0-1") === 0, "'0-1' converted MUST equal 0");
console.assert(myAtoi("words and 987") === 0, "'words and 987' converted MUST equal 0");