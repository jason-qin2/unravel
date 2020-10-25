import React from 'react';
import logo from './logo.svg';
import './App.css';
import WebScrape from './Components/WebScrape';
import ErrorPage from './Components/ErrorPage.js';
import MaterialPage from './Components/MaterialPage.js';
import * as components from './Components';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={WebScrape} />
        <Route path="/material" component={MaterialPage} />
      </Switch>
    </main>
  );
}

export default App;
