import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moviesActions } from '../redux/actions/MoviesActions';
import Pagination from '@material-ui/lab/Pagination';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import MovieItem from './MovieItem';
import SearchBar from './SearchBar';

const Container = styled.div`
    margin: auto;
    width: auto;
    text-align: center;
`

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

const MoviesList = () => {

    const dispatch = useDispatch();
    const moviesList = useSelector((state: any) => state?.Movies.data);
    const [pageNumber, setPageNumber] = useState<number>(1);

    useEffect(() => {
        dispatch(moviesActions.getAllMovies(pageNumber))
    }, [dispatch, pageNumber])

    return (
        <Container>
            <SearchBar/>
            <List>
                {
                    moviesList && moviesList.results.map((movie, i) => {
                        return (
                            <MovieItem key={movie.id} movie={movie}/>
                        )
                    })
                }
            </List>
            <Pagination count={moviesList?.total_pages} page={pageNumber} onChange={(e, v) => {setPageNumber(v)}}/>
        </Container>
    );
};

export default MoviesList;