import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './header/Header';
import Landing from './landing/Landing';

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={Landing} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
