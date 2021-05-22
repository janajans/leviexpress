import React from 'react';
import { render } from 'react-dom';
import Footer from './Footer';
import Header from './Header';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Reservation from './Reservation';
import Home from './Home';

// Naše aplikace bude mít dvě hlavní stránky: Home a Reservation. Obě obsahují stejnou hlavičku i patičku. Stránka Home --> pod routou /, stránka rezervace--> adresu /reservation.

// Uvnitř komponenty App sestavte router tak, aby komponenty Header a Footer byly na stránce zobrazeny vždy. Mezi ně vložte Switch, který bude mít dvě routy: / a /reservation. V obou routách zatím zobrazte například nadpis h2 a vyzkoušejte, že vaše stránka správně zobrazuje obě stránky.
// Vytvořte komponenty Home a Reservation, každou ve vlastní složce. Tyto komponenty zobrazte na adresách / a /reservation. Obě komponenty zatím můžou vracet pouze nadpis h2 abychom viděli, že se na stránce něco děje. Obsah komponent vytvoříme později.

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
