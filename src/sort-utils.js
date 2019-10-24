
/**
 * params: kvSet (Set<string>), contains unique unsorted months name
 * return: sorted year months []
 */

export const sortYearMonths = kvSet => {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]	
    /* Sorting payments months names using index of sample array
     * To avoid sort function negative result (0-1 => -1), added 1 so indexOf("January") 
     * will be 0 to 1 and indexOf("February") will be 1 to 2	
    */
    return Array.from(kvSet).sort((a,b) => months.indexOf(a) + 1 - months.indexOf(b) + 1)
    
}

export default sortYearMonths