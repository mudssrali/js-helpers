export const isEqual = (array1: Array<any>, array2: Array<any>): boolean => {
	return JSON.stringify(array1) === JSON.stringify(array2);
}

export const takeRight = (array: Array<any>, n: number): Array<any> => {
	if (n < 1) return [];
	return array.slice(-1 * n);
}