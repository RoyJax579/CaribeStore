import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './App';
import ContextProvider from './Context/contextProvider';


ReactDOM.render(
  <>
    <ContextProvider>
      <App />
    </ContextProvider>
  </>,
  document.getElementById('root')
);
