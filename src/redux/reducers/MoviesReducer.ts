import moviesActionTypes from '../actionTypes/moviesActionTypes';

export const transactionsList = (state = {}, action) => {
    switch(action.type) {
        case moviesActionTypes.GET_ALL_MOVIES_REQUEST:
            return action.payload.data;
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