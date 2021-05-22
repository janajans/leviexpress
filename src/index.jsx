import React from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => (
  <div className="container">
    <header>
      <div className="logo"></div>
      <h1>Webová aplikace</h1>
    </header>
    <main>
      <p>Vlak je připraven ve stanici.</p>
    </main>
    <footer>
      <p>Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>
);

render(<App />, document.querySelector('#app'));
