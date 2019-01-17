import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './header/Header';
import Landing from './landing/Landing';
import Prices from './prices/Prices';
import Footer from './footer/Footer';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/prices" exact component={Prices} />
        </Switch>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
