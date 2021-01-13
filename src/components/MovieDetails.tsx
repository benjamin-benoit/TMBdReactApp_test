import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moviesActions } from '../redux/actions/MoviesActions';
import { useParams } from "react-router";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    margin: 15px;
    position: relative;
    @media (max-width: 768px) {
        display: block;
    }
`

const Image = styled.img`
    @media (max-width: 768px) {
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
`

const MovieTitle = styled.div`
    display: block;
    font-size: 25px;
`

const MovieOverview = styled.div`
    display: block;
    margin-top: 25px;
`

const MovieVote = styled.div`
    display: block;
    margin-top: 25px;
    margin-bottom: 25px;
`


const MovieDetails = () => {

    const dispatch = useDispatch();
    const movieDetails = useSelector((state: any) => state?.MovieDetails.data);
    const { id } = useParams() as any;

    useEffect(() => {
        dispatch(moviesActions.getMovieDetails( id ))
    }, [dispatch, id])
    
    return (
        <Container>
            <div>
                <MovieTitle>{movieDetails?.original_title}</MovieTitle>
                <MovieOverview>{movieDetails?.overview}</MovieOverview>
                <MovieVote>{Math.round(movieDetails?.vote_average * 10) / 10} / 10</MovieVote>
            </div>
            <Image src={"https://image.tmdb.org/t/p/w300" + movieDetails?.poster_path} alt="Poster" />
        </Container>
    );
};

export default MovieDetails;