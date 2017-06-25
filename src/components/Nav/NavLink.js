// modules/NavLink.js
import React from 'react';
import { NavLink } from 'react-router-dom';

export default class MyNav extends React.Component {
  render() {
    return (
      <NavLink {...this.props} activeStyle={{ backgroundColor: '#111' }} />
    );
  }
}
