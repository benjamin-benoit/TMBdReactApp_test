import React, { useState } from 'react';
import styled from 'styled-components';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Container = styled.div`
    display: flex;
    height: 50px;
    line-height: 50px;
    width: 100%;
    background-color: #5FA5F8;
`

const HeaderTitle = styled.div`
    vertical-align: middle;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    color: #fff;
`

const Header = ({themeToggler}) => {

    const [state, setState] = useState(false);

    const handleChange = (event) => {
        setState(event.target.checked);
        themeToggler();
    }

    return (
        <Container>
            <HeaderTitle>Movies</HeaderTitle>
            <Typography component="div">
                <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>Off</Grid>
                <Grid item>
                    {/* <AntSwitch checked={state} onChange={handleChange} name="checkedC" /> */}

                    <Switch
                        checked={state}
                        onChange={handleChange}
                        name="blackMode"
                        color="default"
                    />
                </Grid>
                <Grid item>On</Grid>
                </Grid>
            </Typography>
        </Container>
    );
};

export default Header;