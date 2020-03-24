/*
 *  description: takes a single array, breaks it into chunks of size chunkSize
 *               and returns an array of arrays of max length chunkSize
 * 
 *  @param reverse: if set to true, chunkify will return the reverse version(shallow copy) of the original array
 * 
 *  params: kvArray, chunkSize, reverse = false
 *  defaults: kvArray = [], chunkSize = 10
 *  return: [[], [], [], ...]
 */
export const chunkify = (kvArray = [], chunkSize = 10, reverse = false) => {
    if (kvArray.length === 0) {
        return [[]]
    }

    if (kvArray.length <= chunkSize) {
        // check if reverse true, without mutating the original array,
        // return the reverse array, else return the shallow copy of original array
        const new_arr = reverse ? kvArray.map((_, index) => kvArray[kvArray.length - 1 - index]) : [...kvArray]

        return [new_arr]
    }

    return kvArray.reduce((agg, curr, index) => {

        const curr = reverse ? kvArray[kvArray.length - 1 - index] : kvArray[index]

        const chunkIndex = Math.floor(index / chunkSize)

        if (!agg[chunkIndex]) {
            agg[chunkIndex] = [] // create a new chunk
        }

        agg[chunkIndex].push(curr)

        return agg

    }, [])
}

export default chunkify