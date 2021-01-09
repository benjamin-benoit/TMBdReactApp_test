import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
