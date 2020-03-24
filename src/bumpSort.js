/**
 * Return a new sorted array, except with one value bumped to the front. This
 * function does not sort an array in place; a new array is returned.
 *
 * For example:
 *
 * > bumpSort(['group B', 'group A', 'group C', 'control'], 'control');
 * ['control', 'group A', 'group B', 'group C']
 */
export function bumpSort(arr, valueToBump) {
	const arrCopy = arr.slice();
	const valueIndex = arrCopy.indexOf(valueToBump);

	if (valueIndex === -1) return arrCopy.sort();

	const arrOfBumped = arrCopy.splice(valueIndex, 1);
	return arrOfBumped.concat(arrCopy.sort());
}