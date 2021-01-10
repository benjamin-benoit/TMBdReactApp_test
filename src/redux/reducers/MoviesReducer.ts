import moviesActionTypes from '../actionTypes/MoviesActionTypes';

export function Movies (state = {}, action) {
    switch(action.type) {
        case moviesActionTypes.GET_ALL_MOVIES_REQUEST:
            return {
                loading: true
            }
        case moviesActionTypes.GET_ALL_MOVIES_REQUEST_SUCCESS :
            return {
                data: action.data
            }
        case moviesActionTypes.GET_ALL_MOVIES_REQUEST_FAILURE :
            return {
                error: action.error
            }
        default:
            return state;
    }
}
export function MovieDetails (state = {}, action) {
    switch(action.type) {
        case moviesActionTypes.GET_MOVIE_DETAILS_REQUEST:
            return {
                loading: true
            }
        case moviesActionTypes.GET_MOVIE_DETAILS_REQUEST_SUCCESS :
            return {
                data: action.data
            }
        case moviesActionTypes.GET_MOVIE_DETAILS_REQUEST_FAILURE :
            return {
                error: action.error
            }
        default:
            return state;
    }
}