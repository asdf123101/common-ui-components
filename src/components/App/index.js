import React, { Component } from 'react';
import logo from './logo-white.png';
import { Header, Logo } from './style.js';

export default class App extends Component {
  render() {
    return (
      <Header>
        <Logo src={logo} alt="logo" />
      </Header>
    );
  }
}
