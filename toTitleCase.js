const toTitleCase = (text) => {
    if(text == null || text === "") {
        return ""
    }
    return text.trim()
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
        .join(' ')
}

export default toTitleCase