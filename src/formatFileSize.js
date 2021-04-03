/**
 * 
 * @param bytes takes number of bytes (demical or integer value)
 * @param suffixIndex to get the right representation of size e.g. bytes, KB, MB or GB
 * @returns return string value
 */
function formatFileSize(bytes, suffixIndex = 0) {
	const suffixes = ['bytes', 'KB', 'MB', 'GB'];
	if (bytes < 1000) {
		return +bytes.toFixed(2) + ' ' + suffixes[suffixIndex];
	}

	return formatFileSize(bytes / 1024, suffixIndex + 1);
}