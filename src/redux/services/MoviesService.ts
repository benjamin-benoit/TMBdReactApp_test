export const moviesService = { getAllMovies }

function getAllMovies(pageNumber) {

    const requestOptions = {
        method: 'GET'
    };

    return fetch(`${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}&page=${pageNumber}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                window.location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}