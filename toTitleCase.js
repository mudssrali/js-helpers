/**
 *  @params text: only string allow
 *  @params split_by: Optional delimiter to split the string, has defaulter space separator
 * 
 *  Description: resturns title-cased text
 */
const toTitleCase = (text, split_by = " ") => {
    if (text == null || text === "") {
        return ""
    }
    return text.trim()
        .toLowerCase()
        .split(split_by)
        .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
        .join(split_by)
}

export default toTitleCase