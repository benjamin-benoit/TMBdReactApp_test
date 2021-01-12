import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Element = styled.div`
    position: relative;
    width: 200px;
    margin: 10px;
`

const Image = styled.img`
    max-width: 100%;
`

const Title = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0px;
    background-color: rgba(255, 255, 255, 0.7);
    text-align: center;
`

const TextTitle = styled.h3`
    font-size: 20px;
`

const MovieItem = ({movie}) => {

    const history = useHistory()
    
    const [isShown, setIsShown] = useState(false);
    return (
        <Element key={movie.id} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} onClick={() => history.push("/" + movie.id)}>
            <Image src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} alt="Poster" />
            {isShown && (
                <Title>
                    <TextTitle>{movie.title}</TextTitle>
                </Title>
            )}
        </Element>
    );
};

export default MovieItem;