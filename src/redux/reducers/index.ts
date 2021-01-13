import { Movies } from './MoviesReducer';
import { MoviesResults } from './MoviesResultsReducer';
import { MovieDetails } from './MovieDetails';
import {combineReducers} from 'redux';

const root = combineReducers({Movies, MoviesResults, MovieDetails})

export default root;