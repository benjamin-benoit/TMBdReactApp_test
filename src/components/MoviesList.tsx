import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moviesActions } from '../redux/actions/MoviesActions';
import Pagination from '@material-ui/lab/Pagination';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import MovieItem from './MovieItem';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const MoviesList = () => {

    const dispatch = useDispatch();
    const moviesList = useSelector((state: any) => state?.Movies.data);
    const [pageNumber, setPageNumber] = useState<number>(1);

    useEffect(() => {
        dispatch(moviesActions.getAllMovies(pageNumber))
    }, [dispatch, pageNumber])

    return (
        <>
            <Container>
                {
                    moviesList && moviesList.results.map((movie, i) => {
                        return (
                            <MovieItem key={movie.id} movie={movie}/>
                        )
                    })
                }
            </Container>
            <Pagination count={moviesList?.total_pages} page={pageNumber} onChange={(e, v) => {setPageNumber(v)}}/>
        </>
    );
};

export default MoviesList;