export const isDecimalNumber = (number) => {
    return number % 1 === 0 ? false : true
}

export const isDecimalNumber = (number) => {
    return Number.isInteger(number)
}

/**
 * Return true if n is a float.
 *
 * For example:
 *
 * isFloat(5) => false
 * isFloat('John') => false
 * isFloat(3.14) => true
 */
export function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}