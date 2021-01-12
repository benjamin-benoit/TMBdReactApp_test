import React, { useState } from 'react';
import './App.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from "history";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle} from 'styled-components';
import { lightTheme, darkTheme } from "./theme"

import MoviesList from './components/MoviesList';
import MovieDetails from './components/MovieDetails';
import Header from './components/Header';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `

const history = createBrowserHistory();


function App() {

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const switchTheme = () => (theme === 'light' ? lightTheme : darkTheme);

  return (
    <ThemeProvider theme={switchTheme}>
      <>
      <Header themeToggler={themeToggler} theme={switchTheme()}/>
      <GlobalStyles/>
        <Provider store={store}>
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={MoviesList}/>
              <Route path="/:id" component={MovieDetails}/>
              <Redirect from="*" to="/"/>
            </Switch>
          </Router>
        </Provider>
      </>
    </ThemeProvider>
  );
}

export default App;
