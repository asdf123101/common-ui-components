import React from 'react';
import {Motion, spring} from 'react-motion';

import './style.css'


export default class Toggle extends React.Component {
	state = {
		open:false,
	}

	handleClick = () => {
		this.setState({open: !this.state.open});
	}

	render() {
		return (
			<div>
				<h2>Try the toggole which controls the status and animation. The block itself is also clickable.</h2>
				<button onClick={this.handleClick}>
				Toggle
				</button>
				<h2>Status: {this.state.open? "open" : "closed"}</h2>
				<Motion style={{x: spring(this.state.open ? 200 : 0)}}>
				{({x}) => 
					<div className="toggle-bg">
					<div className="toggle-block" onClick={this.handleClick} style={{
						transform: `translate3d(${x}px, 0, 0)`,
					}}>
					</div>
					</div>
				}
				</Motion>
			</div>
		)
	}
}
