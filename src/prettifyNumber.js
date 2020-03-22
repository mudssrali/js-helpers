
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
 *     - Assuming process.env.REACT_APP_VALUE_DECIMAL_PLACES === 3
 */
export function prettifyNumber(n) {
	if (isFloat(n)) {
		return n.toLocaleString('en-US', {
			minimumFractionDigits: process.env.REACT_APP_VALUE_DECIMAL_PLACES,
			maximumFractionDigits: process.env.REACT_APP_VALUE_DECIMAL_PLACES,
		});
	} else {
		return n.toLocaleString('en-US');
	}
}