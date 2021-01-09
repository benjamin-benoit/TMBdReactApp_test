import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moviesActions } from '../redux/actions/MoviesActions';
import Pagination from '@material-ui/lab/Pagination';

const MoviesList = () => {

    const dispatch = useDispatch();
    const moviesList = useSelector((state: any) => state?.Movies.data);
    const [pageNumber, setPageNumber] = useState<number>(1);

    useEffect(() => {
        dispatch(moviesActions.getAllMovies(pageNumber))
    }, [dispatch, pageNumber])

    return (
        <>
            <div>
                {
                    moviesList && moviesList.results.map((movie, i) => {
                        return <p key={movie.id}>
                            { movie.title }
                        </p>
                    })
                }
            </div>
            <Pagination count={moviesList?.total_pages} page={pageNumber} onChange={(e, v) => {setPageNumber(v)}}/>
        </>
    );
};

export default MoviesList;