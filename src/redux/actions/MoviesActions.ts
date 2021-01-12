import { moviesService } from "../services/MoviesService";
import { moviesActionTypes } from "../actionTypes/MoviesActionTypes";

export const moviesActions = {
    getAllMovies,
    getMoviesResults,
    getMovieDetails
};

function getAllMovies(pageNumber: number = 1) {
    return dispatch => {
        dispatch(request())
        moviesService.getAllMovies(pageNumber).then(
            data => dispatch(success(data)),
            error => dispatch(failure(error))
        )
    }
    function request() {
        return { type: moviesActionTypes.GET_ALL_MOVIES_REQUEST }
    }
    function success(data) {
        return { type: moviesActionTypes.GET_ALL_MOVIES_SUCCESS, data }
    }
    function failure(error) {
        return { type: moviesActionTypes.GET_ALL_MOVIES_FAILURE, error }
    }
}

function getMoviesResults(text: string) {
    return dispatch => {
        dispatch(request())
        moviesService.getMoviesResults(text).then(
            data => dispatch(success(data)),
            error => dispatch(failure(error))
        )
    }
    function request() {
        return { type: moviesActionTypes.GET_MOVIE_RESULTS_REQUEST }
    }
    function success(data) {
        return { type: moviesActionTypes.GET_MOVIE_RESULTS_SUCCESS, data }
    }
    function failure(error) {
        return { type: moviesActionTypes.GET_MOVIE_RESULTS_FAILURE, error }
    }
}

function getMovieDetails(id: number) {
    return dispatch => {
        dispatch(request())
        moviesService.getMovieDetails(id).then(
            data => dispatch(success(data)),
            error => dispatch(failure(error))
        )
    }
    function request() {
        return { type: moviesActionTypes.GET_MOVIE_DETAILS_REQUEST }
    }
    function success(data) {
        return { type: moviesActionTypes.GET_MOVIE_DETAILS_SUCCESS, data }
    }
    function failure(error) {
        return { type: moviesActionTypes.GET_MOVIE_DETAILS_FAILURE, error }
    }
}