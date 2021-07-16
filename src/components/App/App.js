import React from 'react';
import { BrowserRouter, } from 'react-router-dom';

// компоненты страниц сайта
import Main from '../Main/Main';


function AppInternal() {
  return (
     <Main />
  );
}

function App() {
  return (<BrowserRouter><AppInternal /></BrowserRouter>)
}

export default App;
