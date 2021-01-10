import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moviesActions } from '../redux/actions/MoviesActions';
import { useParams } from "react-router";
import { useHistory } from 'react-router-dom';

const MovieDetails = () => {

    const history = useHistory()

    const dispatch = useDispatch();
    const movieDetails = useSelector((state: any) => state);
    const { id } = useParams() as any;
    
    console.log('====================================');
    console.log(id);
    console.log('====================================');

    useEffect(() => {
        dispatch(moviesActions.getMovieDetails( id ))
    }, [dispatch])
    
    return (
        <div>
            Test
        </div>
    );
};

export default MovieDetails;