# JavaScript - Typescript helper-functions

Some hand-crafted ES6 based utility functions:

- **Split Array into Chunks**

   ```javascript
    chunkify(kvArray = [], chunkSize = 10, reverse = false): Array<[]>
   ```

  [View Code](./src/chunkify.js)

- **Split Array into Chunks** - V2

   ```javascript
    chunkify(kvArray = [], chunkSize = 10): Array<[]>
   ```

  [View Code](./src/chunkify2.js)

- **Check number**

  ```javascript
    isDecimalNumber(number: any): boolean
    isFloat(value: any): boolean
  ```

  [View Code](./src/typeTeller.js)

- **Convert text to Titled-Case**

  ```javascript
    toTitleCase(text: string,  split_by: string): string
  ```

  > e.g. toTitleCase("mUdAssaAr lOve OpEn SouRCe") ===========> Mudassar Love Open Source
  
  [View Code](./src/toTitleCase.js)

- **Prettify Number**
  
  **Description**: Prettify a number for use in the application. Use toLocaleString, but also force a standard number of decimal places if it's a float.

  ```javascript
    prettifyNumber(number): string
  ```

  [View Code](./src/prettifyNumber.js)

- **Random Color Code Generator**

  ```javascript
    randomColorGenerator(): string
  ```

  [View Code](./src/randomColorGenerator.js)

- **Bump Array Sort**
  **Description**: Return a new sorted array, except with one value bumped to the front. This function does not sort an array in place; a new array is returned.

  ```javascript
    bumpSort(kvArray: Array, bumpValue: any): Array
  ```

  [View Code](./src/bumpSort.js)

- **Sort Year Months**

  ```javascript
    sortYearMonths(kvSet: Set<string>): Array
    sortYearMonths(kvArray: Array<string>): Array
  ```

  [View Code](./src/arrayUtils.ts)

- **Array Utils**

  ```javascript
    isEqual(array1: Array<any>, array2: Array<any>): boolean
    takeRight(array: Array<any>, n: number): Array<any>
  ```

  [View Code](./src/arrayUtils.ts)

## Contributions

Contributions of any kind are welcome.

[MIT-LICENSE](./LICENSE)
