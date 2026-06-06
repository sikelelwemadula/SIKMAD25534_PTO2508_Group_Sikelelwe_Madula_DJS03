/**
 * @function fetchPodcasts
 * Asynchronously fetches podcast data from the remote API and updates it accordingly.
 * Handles loading, error, and successful data response via provided state setters.
 * 
 * @param {Function} setPodcasts - State setter function to update the podcast array.
 * @param {Functoin} setError - State setter function to update the error message (string).
 * @param {FUnction} setLoading - State setter function to toggle the loading state (boolean).
 * 
 * @returns {Promise<void>} - A promise that resolves when the fetch process completes.
 * 
 **/
export async function fetchPodcasts(setPodcasts, setError, setLoading) {
    try {
        const res = await fetch("https://podcast-api.netlify.app/shows");
        if (!res.ok) throw new Error(`${res.status}`);
        const data = await res.json();
        setPodcasts(data);
    } catch (err) {
        console.error("Failed to fetch podcasts:", err);
        setError(err.message);
    } finally {
        setLoading(false);      
    }
}
