export function getBaseUrl() {
    return process.env.REACT_APP_USER_API_URL //'http://localhost:3001/'
}

export async function handleResponse(response) {
    if (response.ok)
        return await response.json();
    if (response.status === 400) {
        // So, a server-side validation error occurred.
        // Server side validation returns a string error message, so parse as text instead of json.
        const error = await response.json();
        throw error;
        //throw new Error(error);
    }
    throw new Error('Network response was not ok.');
}

export function handleError(error) {
    // eslint-disable-next-line no-console
    console.error('API call failed. ' + error);
    throw error;
}