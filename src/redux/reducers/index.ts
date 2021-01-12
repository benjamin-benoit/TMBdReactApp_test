import { Movies } from './MoviesReducer';
import { MoviesResults } from './MoviesResultsReducer';
import {combineReducers} from 'redux';

const root = combineReducers({Movies, MoviesResults})

export default root;