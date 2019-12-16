export const isDecimalNumber = (number) => {
    return number % 1 === 0 ? false : true
}
export const isDecimalNumber = (number) => {
    return Number.isInteger(number)
}