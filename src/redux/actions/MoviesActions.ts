import { moviesService } from "../services/MoviesService";
import { moviesActionTypes } from "../actionTypes/MoviesActionTypes";

export const moviesActions = {
	getAllMovies
};

export const getAllMovies() {
    return dispatch => {
        dispatch(request())
        moviesService.getAllMovies().then(
            data => dispatch(success(data)),
            error => dispatch(failure(error))
        )
    }
    function request() {
        return { type: moviesActionTypes.GET_ALL_MOVIES_REQUEST }
    }
    function success(data) {
        return { type: moviesActionTypes.GET_ALL_MOVIES_REQUEST_SUCCESS, data }
    }
    function failure(error) {
        return { type: moviesActionTypes.GET_ALL_MOVIES_REQUEST_FAILURE, error }
    }
}