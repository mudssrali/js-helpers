/**
 * Split an array into chunks
 * @param array {T[]} Array to split
 * @param size {number} Chunk size
 */
const chunkify = <T>(array: T[], size: number): T[][] => {
  const arr: T[][] = []
  for (let i = 0, j = array.length; i < j; i += size) {
    arr.push(array.slice(i, i + size));
  }
  return arr
}
