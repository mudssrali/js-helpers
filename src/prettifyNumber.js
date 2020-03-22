
/**
 * Prettify a number for use in this application. Use toLocaleString, but also
 * force a standard number of decimal places if it's a float.
 *
 * For example:
 *
 * prettifyNumber(5) => 5
 * prettifyNumber(5000) => 5,000
 * prettifyNumber(5000000) => 5,000,000
 * prettifyNumber(3.2) => 3.200
 *     - Assuming DECIMAL_PLACES === 3
 */
export function prettifyNumber(n) {
	if (isFloat(n)) {
		return n.toLocaleString('en-US', {
			minimumFractionDigits: DECIMAL_PLACES,
			maximumFractionDigits: DECIMAL_PLACES,
		});
	} else {
		return n.toLocaleString('en-US');
	}
}