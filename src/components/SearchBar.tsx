import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    width: 90%;
    margin-top: 10px;
`

const SearchBar = () => {
    return (
        <div>
            <SearchInput type="search"/>
        </div>
    );
};

export default SearchBar;