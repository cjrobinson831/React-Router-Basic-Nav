import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from "react-router-dom"

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" componet={Home} />
    <Route exact path="/About" componet={About} />
    <Route exact path="/Contact" componet={Contact} />

  </div>
);

export default App;
