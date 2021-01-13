import moviesActionTypes from '../actionTypes/MoviesActionTypes';

export function MovieDetails (state = {}, action) {
    switch(action.type) {
        case moviesActionTypes.GET_MOVIE_DETAILS_REQUEST:
            return {
                loading: true
            }
        case moviesActionTypes.GET_MOVIE_DETAILS_SUCCESS :
            return {
                data: action.data
            }
        case moviesActionTypes.GET_MOVIE_DETAILS_FAILURE :
            return {
                error: action.error
            }
        default:
            return state;
    }
}