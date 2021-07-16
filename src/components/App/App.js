import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// компоненты страниц сайта
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';


function AppInternal() {
  return (
    <Switch>
      <Route exact path='/'>
        <Main />
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  );
}

function App() {
  return (<BrowserRouter><AppInternal /></BrowserRouter>)
}

export default App;
