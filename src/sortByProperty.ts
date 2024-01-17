/**
 * Sorts an array of objects based on the specified property in ascending order (default).
 * The function compares the property values in a case-insensitive manner.
 * @param arr The array to be sorted.
 * @param prop The property name used for sorting the objects.
 * @returns The sorted array in ascending order based on the specified property.
 */
export const sortByProperty = (arr: Array<any>, prop: string) => {
    return arr.sort((a, b) => {
      const itemA = a[prop].toUpperCase()
      const itemB = b[prop].toUpperCase()
        
      if (itemA < itemB) {
        return -1
      }
      
      if (itemA > itemB) {
        return 1
      }
  
      return 0
    })
}