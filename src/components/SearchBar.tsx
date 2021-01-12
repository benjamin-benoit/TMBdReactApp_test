import React, { useState } from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    width: 90%;
    margin-top: 10px;
`

const SearchBar = () => {

    const [search, setSearch] = useState();

    return (
        <div>
            <SearchInput onChange={(e, v) => setSearch(v)} value={search} type="search"/>
        </div>
    );
};

export default SearchBar;