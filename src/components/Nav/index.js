import React from 'react';
import NavLink from './NavLink';

import { NavUl, NavLi } from './style.js';

const Nav = () =>
  <NavUl>
    <NavLi><NavLink to="/" exact={true}>Home</NavLink></NavLi>
    <NavLi><NavLink to="/toggle">Toggle</NavLink></NavLi>
    <NavLi><NavLink to="/tabs">Tab View</NavLink></NavLi>
    <NavLi><NavLink to="/counter">Counter</NavLink></NavLi>
    <NavLi><NavLink to="/modal">Modal</NavLink></NavLi>
    <NavLi><NavLink to="/slideshow">Slide</NavLink></NavLi>
    <NavLi><NavLink to="/form">Form</NavLink></NavLi>
    <NavLi><NavLink to="/tabss">Test 404</NavLink></NavLi>
  </NavUl>;

export default Nav;
