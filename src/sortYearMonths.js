
/**
 * params: kvSet (Set<string>), contains unique unsorted months name
 * return: sorted year months []
 */

export const sortYearMonths = (kvSet) => {

    const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
    /* Sorting payments months names using index of sample array
     * To avoid sort function negative result (0-1 => -1), added 1 so indexOf("january") 
     * will be 0 to 1 and indexOf("jebruary") will be 1 to 2	
    */
    return Array.from(kvSet).sort((a, b) => months.indexOf(a.toLowerCase()) + 1 - months.indexOf(b.toLowerCase()) + 1)
}

export const sortYearMonths = (kvArray) => {

    const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
    /*
     * To avoid sort function negative result (0-1 => -1), added 1 so indexOf("january") 
     * will be 0 to 1 and indexOf("jebruary") will be 1 to 2	
    */
    return kvArray.sort((a, b) => months.indexOf(a.toLowerCase()) + 1 - months.indexOf(b.toLowerCase()) + 1)
}
