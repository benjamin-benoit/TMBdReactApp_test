import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Element = styled.div`
    width: 200px;
    margin: 10px;
`

const Image = styled.img`
    max-width: 100%;
`

const Title = styled.div`
    max-width: 100%;
`

const MovieItem = ({movie}) => {

    const history = useHistory()
    
    const [isShown, setIsShown] = useState(false);
    return (
        <Element key={movie.id} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} onClick={() => history.push("/" + movie.id)}>
            <Image src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} alt="Poster" />
            {isShown && (
                <Title>
                    <h3>{movie.title}</h3>
                </Title>
            )}
        </Element>
    );
};

export default MovieItem;