import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moviesActions } from '../redux/actions/MoviesActions';
import Pagination from '@material-ui/lab/Pagination';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import MovieItem from './MovieItem';

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

const SearchInput = styled.input`
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    width: 90%;
    margin-top: 10px;
`

const MoviesList = () => {

    const dispatch = useDispatch();
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [search, setSearch] = useState("");
    const moviesList = useSelector((state: any) => {
        return search ? state?.MoviesResults.data : state?.Movies.data
    });

    useEffect(() => {
        dispatch(moviesActions.getAllMovies(pageNumber))
    }, [dispatch, pageNumber])

    useEffect(() => {
        if(search.trim() !== "") {
            console.log("ben", search)
            dispatch(moviesActions.getMoviesResults(search))
        }
    }, [dispatch, search])

    return (
        <Container>
            <div>
                <SearchInput onChange={(e) => setSearch(e.target.value)} value={search} type="search" placeholder="Rechercher un film"/>
            </div>
            <List>
                {
                    moviesList && moviesList.results.map((movie, i) => {
                        return (
                            <MovieItem key={movie.id} movie={movie}/>
                        )
                    })
                }
                {
                    moviesList && moviesList.results.length === 0 && (
                        <span>Aucun résultat.</span>
                    )
                }
            </List>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Pagination style={{margin: 'auto'}} count={moviesList?.total_pages} page={pageNumber} onChange={(e, v) => {setPageNumber(v)}}/>
            </Grid>
        </Container>
    );
};

export default MoviesList;