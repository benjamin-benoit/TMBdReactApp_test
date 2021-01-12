import moviesActionTypes from '../actionTypes/MoviesActionTypes';

export function MoviesResults (state = {}, action) {
    switch(action.type) {
        case moviesActionTypes.GET_MOVIE_RESULTS_REQUEST:
            return {
                loading: true
            }
        case moviesActionTypes.GET_MOVIE_RESULTS_SUCCESS :
            return {
                data: action.data
            }
        case moviesActionTypes.GET_MOVIE_RESULTS_FAILURE :
            return {
                error: action.error
            }
        default:
            return state;
    }
}