import React from 'react';
import NavLink from './NavLink';

class Nav extends React.Component {
  	render() {
  		return (
		<ul>
		<li><NavLink to="/" exact={true}>Home</NavLink></li>
		<li><NavLink to="/tabs" >Tab View</NavLink></li>
		<li><NavLink to="/tabss" >Test 404</NavLink></li>
		</ul>
  		)
	}
}

export default Nav;