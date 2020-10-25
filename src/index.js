import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebScrape from './Components/WebScrape';
import NavBar from './Components/NavBar';
import Fact from './Components/Fact.js';
import Home from './Components/Home.js';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <NavBar/>
    <App />
    {/*<App />*/}
    <Switch>
      <Route path="/Home">
        <Home />
      </Route>

      <Route exact path="/Fact" component={Fact}>
        <Fact />
      </Route>

      <Route exact path="/Scrape" component={WebScrape}>
        <WebScrape />
      </Route>

      <Route path="/">
        <Home />
      </Route>
          
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
