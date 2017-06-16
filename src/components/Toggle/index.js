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
				<h1>Try the toggole which controls the status and animation </h1>
				<button onClick={this.handleClick}>
				Toggle
				</button>
				<h2>Open: {this.state.open.toString()}</h2>
				<Motion style={{x: spring(this.state.open ? 200 : 0)}}>
				{({x}) => 
					<div className="toggle-bg">
					<div className="toggle-block" style={{
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
