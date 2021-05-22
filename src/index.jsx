import React from 'react';
import { render } from 'react-dom';
import Footer from './Footer';
import Header from './Header';
import './style.css';

const App = () => (
  <>
    <Header />
    <Footer />
  </>
);

render(<App />, document.querySelector('#app'));
