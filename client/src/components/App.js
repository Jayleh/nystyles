import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './views/header/Header';
import Landing from './views/landing/Landing';
import Services from './views/services/Services';
import Gallery from './views/gallery/Gallery';
import Prices from './views/prices/Prices';
import Contact from './views/contact/Contact';
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
          <Route path="/services" exact component={Services} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/prices" exact component={Prices} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
        <ScrollTopButton />
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
