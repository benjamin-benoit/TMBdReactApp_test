import React, { useState } from 'react';
import styled from 'styled-components';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    line-height: 50px;
    width: 100%;
    background-color: ${(props) => props.theme.primaryColor};
    position: relative;
`

const HeaderTitle = styled.div`
    vertical-align: middle;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    color: #fff;
`

const SwitchContainer = styled.div`
    position: absolute;
    right: 5px;
`

const Header = ({themeToggler, theme}) => {

    const [state, setState] = useState(false);

    const handleChange = (event) => {
        setState(event.target.checked);
        themeToggler()
    }

    return (
        <Container theme={theme}>
            <HeaderTitle>Movies</HeaderTitle>
            <SwitchContainer>
                <Typography style={{marginRight: '0'}} component="div">
                    <Grid component="label" container alignItems="center" spacing={1}>
                    <Grid item><WbSunnyIcon /></Grid>
                    <Grid item>
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
            </SwitchContainer>
        </Container>
    );
};

export default Header;