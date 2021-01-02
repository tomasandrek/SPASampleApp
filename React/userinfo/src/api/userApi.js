import {getBaseUrl, handleError, handleResponse} from './apiUtils'

function getUrl() {
    return getBaseUrl() + 'users';
}

export async function getUsers() {
    return fetch(getUrl())
        .then(handleResponse)
        .then((json) => {
            return json;
        })
        .catch(handleError);
}