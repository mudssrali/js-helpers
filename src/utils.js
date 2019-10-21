/*
 *  params: inputArray, chunkSize
 *  defaults: inputArray = [], chunkSize = 10
 *  return: [[], [], [], ...]
 */
const arrayChunker = (inputArray = [], chunkSize = 10) => {
    if(inputArray.length === 0) {
        return []
    }
    else if(inputArray.length <= chunkSize) {
        return inputArray
    } else {
        let tempArray = [];
        const length =  inputArray.length

        // make chunks
        for (let i = 0; i < length; i += chunkSize) {
            tempArray = array.slice(i, i + chunkSize)
        }

        // return chunks Arr
        return tempArray
    }
}