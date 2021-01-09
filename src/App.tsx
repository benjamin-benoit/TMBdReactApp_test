import React from 'react';
import './App.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from "history";
import MoviesList from './components/MoviesList';

const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={MoviesList}/>
          <Redirect from="*" to="/"/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
