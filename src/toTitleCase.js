/**
 * @description takes any type of string and convert into Title Cased string
 * @param {string} text non null, no empty string 
 * @param {string} delimiter separator by which text will be splitted and joined with after transformation to Titled-Case 
 * @returns Titled-Cased string concated with given delimiter
 */
const toTitleCase = (text, delimiter = " ") => {
    if (text == null || text === "") {
        return ""
    }
    return text.trim()
        .toLowerCase()
        .split(delimiter)
        .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
        .join(delimiter)
}