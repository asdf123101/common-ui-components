import React from 'react'
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

import './style.css'

class Slide extends React.Component {
static propTypes = {
	index: PropTypes.number.isRequired,
	center: PropTypes.string.isRequired,
	zIndex: PropTypes.number,
	}
render() {
	const className = 'slide slide'+ this.props.index + this.props.center
		return (
			<div className={className} style={{zIndex: this.props.zIndex}}><h2>{this.props.slide}</h2></div>
			)
}
}


export default class SlideShow extends React.Component {
	state = {
		indices: [0,1,2,3,4],
		direction: null,
	}
	

	renderSlides = () => {
		let nSlide = this.state.indices.length
		return (
			<div className='slide-group'>
			<FlipMove duration={600} easing="ease-in-out">
			{this.state.indices.map((slide, index) => {
				const center = (index===(nSlide-1)/2) ? ' center' : ''
				let zIndex = null
				if (this.state.direction === 'left' && index === this.state.indices.length-1) {zIndex = -10}
				if (this.state.direction === 'right' && index === 0) {zIndex = -10}
				return (<Slide index={index} center={center} slide={slide} key={slide} zIndex={zIndex}/>)
			})}
			</FlipMove>
			</div>
			
		)
	}
	handleLeftClick = () => {
		let shiftedState = this.state.indices.slice(1)
		let newState = [...shiftedState,this.state.indices[0]]
		this.setState({indices: newState})
		this.setState({direction: 'left'})
	}
	
	handleRightClick = () => {
		let shiftedState = this.state.indices.slice(0,-1)
		let newState = [this.state.indices[this.state.indices.length-1],...shiftedState]
		this.setState({indices: newState})
		this.setState({direction: 'right'})
	}

	render() {
		return (
		
		<div  className='slideshow'>
			<p>Clicking the button will slide the blocks and the center block is always colored. The animation is borrowed from React-flip-move library with some hack. Overall doing transition animation in React is a bit hard. </p>
			<button className="left" onClick={this.handleLeftClick}>&lt;</button>
			{this.renderSlides()}
			<button className="right" onClick={this.handleRightClick}>&gt;</button>
		</div>
		
		)
	}
}