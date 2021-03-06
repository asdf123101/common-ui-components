import React from 'react';
import NavLink from './NavLink';

import './style.css';

const Nav = () =>
  <ul className="nav">
    <li><NavLink to="/" exact={true}>Home</NavLink></li>
    <li><NavLink to="/toggle">Toggle</NavLink></li>
    <li><NavLink to="/tabs">Tab View</NavLink></li>
    <li><NavLink to="/counter">Counter</NavLink></li>
    <li><NavLink to="/modal">Modal</NavLink></li>
    <li><NavLink to="/slideshow">Slide</NavLink></li>
    <li><NavLink to="/form">Form</NavLink></li>
    <li><NavLink to="/tabss">Test 404</NavLink></li>
  </ul>;

export default Nav;
