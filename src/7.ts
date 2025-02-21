const maxInt = Math.pow(2, 31) - 1;
const minInt = Math.pow(2, 31) * -1;

function reverse(x: number): number {
    let retVal = parseInt([...x.toString()].reverse().join(''));
    if (x < 0) {
        retVal *= -1;
    }
    if (Number.isNaN(retVal) || retVal < minInt || retVal > maxInt) {
        retVal = 0;
    }
    return retVal
};

console.assert(reverse(123) === 321, "'123' reversed is equal to '321");
console.assert(reverse(-123) === -321, "'-123' reversed is equal to '-321");
console.assert(reverse(120) === 21, "'120' reversed is equal to '21");
console.assert(reverse(1534236469) === 0, "'1534236469' reversed is equal to '0");
