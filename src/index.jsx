import React from 'react';
import { render } from 'react-dom';
import Footer from './Footer';
import Header from './Header';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Reservation from './Reservation';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/reservation">
          <Reservation />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
