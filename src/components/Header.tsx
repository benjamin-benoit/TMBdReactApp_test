import React, { useState } from 'react';
import styled from 'styled-components';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
    vertical-align: middle;
`

const BackContainer = styled.div`
    height: 40px;
    position: absolute;
    left: 15px;
    vertical-align: middle;
    text-align: center;
`

const Header = ({history, themeToggler, theme}) => {

    const [state, setState] = useState(false);

    const handleChange = (event) => {
        setState(event.target.checked);
        themeToggler()
    }

    return (
        <Container theme={theme}>
            <BackContainer onClick={() => history.goBack()}>
                <ArrowBackIosIcon style={{color: "#fff" }}/>
            </BackContainer>
            <HeaderTitle>Movies</HeaderTitle>
            <SwitchContainer>
                <Typography component="div">
                    <Grid component="label" container alignItems="center" spacing={1}>
                    <Grid item><WbSunnyIcon style={{ color: "#fff" }}/></Grid>
                    <Grid item>
                        <Switch
                            checked={state}
                            onChange={handleChange}
                            name="blackMode"
                            color="default"
                        />
                    </Grid>
                    <Grid item><Brightness3Icon  style={{ color: "#fff" }}/></Grid>
                    </Grid>
                </Typography>
            </SwitchContainer>
        </Container>
    );
};

export default Header;