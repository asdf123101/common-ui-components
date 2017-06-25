// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Nav from './components/Nav';
import ToggleDemo from './components/Toggle';
import Home from './components/Home';
import TabViewDemo from './components/Tabs';
import Modal from './components/Modal';
import SlideShow from './components/SlideShow';
import Counter from './components/Counter';
import FormDemo from './components/Form';
import NotFound from './components/NotFound';

const Routes = props =>
  <Router {...props}>
    <div className="container">
      <App />
      <Nav />
      <main className="components">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/toggle" component={ToggleDemo} />
          <Route path="/tabs" component={TabViewDemo} />
          <Route path="/counter" component={Counter} />
          <Route path="/modal" component={Modal} />
          <Route path="/slideshow" component={SlideShow} />
          <Route path="/form" component={FormDemo} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  </Router>;

export default Routes;
