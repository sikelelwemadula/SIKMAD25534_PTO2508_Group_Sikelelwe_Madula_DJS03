/**
 * @function formatDate
 * Formats an ISO date string into a readable format.
 * 
 * @param {string}  isoString - ISO date string to format (e.g., "2023-06-15T10:30:00Z")
 * @returns {string} - Formatted date string (e.g., "Jun 15, 2023")
 */
export function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}
