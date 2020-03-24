/*
 *  description: takes a single array, breaks it into chunks of size chunkSize
 *               and returns an array of arrays of max length chunkSize
 *   
 *  params: kvArray, chunkSize
 *  defaults: kvArray = [], chunkSize = 10
 *  return: [[], [], [], ...]
 */

// example
// const arrChunks = chnkify([1,2,4,5,8,7,7,8], 3)
// [1,2,4]
// [5,8,7]
// [7,8]

export const chunkify = (kvArray = [], chunkSize = 10) => {
	return Array.from({
		length: Math.ceil(kvArray.length / chunkSize)
	}, (v, k) => kvArray.slice(k * chunkSize, k * chunkSize + chunkSize))
}

// Tip: revert to original array chunks.flat() // flatten the chunks