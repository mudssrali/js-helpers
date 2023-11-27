# JavaScript Helpers

Some hand-crafted ES6 based JavaScript (type guarded - [TypeScript](https://github.com/mudssrali/typescript-cheatsheet) based) utility functions:

- **String utils**
  ```ts
    isValidLength(str: string, minLength: number)
    isValidEmail(email: string)
  ```

  [View Code](./src/string.ts)

- **Split Array into Chunks**

   ```js
    chunkify(kvArray = [], chunkSize = 10, reverse = false): Array<[]>
   ```

  [View Code](./src/chunkify.js)

- **Split Array into Chunks** - V2

   ```js
    chunkify(kvArray = [], chunkSize = 10): Array<[]>
   ```

  [View Code](./src/chunkify2.js)
  
- **Split Array into Chunks** - V3

   ```js
    chunkify(kvArray: T[], chunkSize: number): Array<T[]>
   ```

  [View Code](./src/chunkify3.ts)

- **Check number**

  ```js
    isDecimalNumber(number: any): boolean
    isFloat(value: any): boolean
  ```

  [View Code](./src/typeTeller.js)

- **Convert text to Titled-Case**

  ```js
    toTitleCase(text: string,  delimiter = ' '): string
  ```

  > e.g. toTitleCase("mUdAssaAr lOves OpEn SouRCe") ===========> Mudassar Loves Open Source
  
  [View Code](./src/toTitleCase.js)

- **Prettify Number**
  
  **Description**: Prettify a number for use in the application. Use toLocaleString, but also force a standard number of decimal places if it's a float.

  ```js
    prettifyNumber(number): string
  ```

  [View Code](./src/prettifyNumber.js)

- **Random Color Code Generator**

  ```js
    randomColorGenerator(): string
  ```

  [View Code](./src/randomColorGenerator.js)

- **Bump Array Sort**
  **Description**: Return a new sorted array, except with one value bumped to the front. This function does not sort an array in place; a new array is returned.

  ```js
    bumpSort(kvArray: Array, bumpValue: any): Array
  ```

  [View Code](./src/bumpSort.js)

- **Sort Year Months**

  ```js
    sortYearMonths(kvSet: Set<string>): Array
    sortYearMonths(kvArray: Array<string>): Array
  ```

  [View Code](./src/sortYearMonths.js)

- **Array Utils**

  ```js
    isEqual(array1: Array<any>, array2: Array<any>): boolean
    takeRight(array: Array<any>, n: number): Array<any>
  ```

  [View Code](./src/arrayUtils.ts)

- **Format File Size**

  ```js
    formatFileSize(bytes: number, suffixIndex = 0): string
  ```

  [View Code](./src/formatFileSize.js)

- **Kebab Case to Title Case**

  ```js
    kebabToTitleCase(str: string): string
  ```

  [View Code](./src/kebabToTitleCase.js)

## Contributions

Contributions of any kind are welcome.

[MIT-LICENSE](./LICENSE)
