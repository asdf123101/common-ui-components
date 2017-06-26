import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, ComponentWrapper } from './style.js';

import App from './components/App';
import Nav from './components/Nav';
import Home from './components/Home';
import ToggleDemo from './components/Toggle';
import TabViewDemo from './components/Tabs';
import ModalDemo from './components/Modal';
import SlideShowDemo from './components/SlideShow';
import CounterDemo from './components/Counter';
import FormDemo from './components/Form';
import NotFound from './components/NotFound';

const Routes = props =>
  <Router {...props}>
    <Container>
      <App />
      <Nav />
      <main>
        <ComponentWrapper>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/toggle" component={ToggleDemo} />
            <Route path="/tabs" component={TabViewDemo} />
            <Route path="/counter" component={CounterDemo} />
            <Route path="/modal" component={ModalDemo} />
            <Route path="/slideshow" component={SlideShowDemo} />
            <Route path="/form" component={FormDemo} />
            <Route component={NotFound} />
          </Switch>
        </ComponentWrapper>
      </main>
    </Container>
  </Router>;

export default Routes;
