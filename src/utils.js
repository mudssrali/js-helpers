/*
 *  params: inputArray, chunkSize
 *  defaults: inputArray = [], chunkSize = 10
 *  return: [[], [], [], ...]
 */
export const arrayChunker = (inputArray = [], chunkSize = 10) => {
    if(inputArray.length === 0) {
        return []
    }
    else if(inputArray.length <= chunkSize) {
        return inputArray
    } else {
        return inputArray.reduce((resultArray, item, index) => { 
            
            const chunkIndex = Math.floor(index/chunkSize)
          
            if(!resultArray[chunkIndex]) {
              resultArray[chunkIndex] = [] // start a new chunk
            }
          
            resultArray[chunkIndex].push(item)
          
            return resultArray
          }, [])
    }
}

export default arrayChunker