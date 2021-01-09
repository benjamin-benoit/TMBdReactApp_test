import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moviesActions } from '../redux/actions/MoviesActions';

const MoviesList = () => {

    const dispatch = useDispatch();
    const moviesList = useSelector((state: any) => state?.Movies.data);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        dispatch(moviesActions.getAllMovies(pageNumber))
    }, [dispatch])

    return (
        <div>
            {
                moviesList && moviesList.results.map((movie, i) => {
                    return <p>
                        { movie.title }
                    </p>
                })
            }
        </div>
    );
};

export default MoviesList;