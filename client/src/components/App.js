import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './views/header/Header';
import Landing from './views/landing/Landing';
import Gallery from './views/gallery/Gallery';
import Prices from './views/prices/Prices';
import Footer from './views/footer/Footer';
import ScrollTopButton from './scrollTopButton/ScrollTopButton';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/prices" exact component={Prices} />
        </Switch>
        <Footer />
        <ScrollTopButton />
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
