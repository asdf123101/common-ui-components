// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Nav from './components/Nav';
import Toggle from './components/Toggle';
import Home from './components/Home';
import TabView from './components/Tabs';
import Modal from './components/Modal';
import SlideShow from './components/SlideShow';
import Counter from './components/Counter';
import Form from './components/Form';
import NotFound from './components/NotFound';

const Routes = props =>
  <Router {...props}>
    <div className="container">
      <App />
      <Nav />
      <main className="components">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/toggle" component={Toggle} />
          <Route path="/tabs" component={TabView} />
          <Route path="/counter" component={Counter} />
          <Route path="/modal" component={Modal} />
          <Route path="/slideshow" component={SlideShow} />
          <Route path="/form" component={Form} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  </Router>;

export default Routes;
