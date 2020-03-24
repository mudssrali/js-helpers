# JavaScript Utils (ES6)

Some hand-crafted ES6 based utils.

- [Split Array into Chunks](./src/chunkify.js)

   ```javascript
    chunkify(kvArray = [], chunkSize = 10, reverse = false): Array<[]>
   ```

  [View Source Code](./src/chunkify.js)

- [Split Array into Chunks](./src/chunkify2.js) - V2

   ```javascript
    chunkify(kvArray = [], chunkSize = 10, reverse = false): Array<[]>
   ```
  [View Source Code](./src/chunkify2.js)

- [Check number](./src/typeTeller.js)

  ```javascript
    isDecimalNumber(number: any): boolean
    isFloat(value: any): boolean
  ```
  [View Source Code](./src/typeTeller.js)

- [Convert text to Titled-Case](./src/toTitleCase.js)

  ```javascript
    toTitleCase(text: string,  split_by: string): string
  ```
  [View Source Code](./src/toTitleCase.js)

- [Prettify Number](./src/prettifyNumber.js)
  
  **Description**: Prettify a number for use in the application. Use toLocaleString, but also force a standard number of decimal places if it's a float.

  ```javascript
    prettifyNumber(number): string
  ```
  [View Source Code](./src/prettifyNumber.js)

- [Random Color Code Generator](./src/randomColorGenerator.js)

  ```javascript
    randomColorGenerator(): string
  ```
  [View Source Code](./src/randomColorGenerator.js)

- [Bump Sort](./src/bumpSort.js)
  **Description**: Return a new sorted array, except with one value bumped to the front. This function does not sort an array in place; a new array is returned.

  ```javascript
    bumpSort(kvArray: Array, bumpValue: any): Array
  ```
  [View Source Code](./src/bumpSort.js)

- [Sort Year Months](./src/sortYearMonths.js)

  ```javascript
    sortYearMonths(kvSet: Set<string>): Array
    sortYearMonths(kvArray: Array<string>): Array
  ```
  [View Source Code](./src/sortYearMonths.js)

## Contributions

Contributions of any kind are welcome.

[MIT-LICENSE](./LICENSE)