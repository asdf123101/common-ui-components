import React from 'react'

const ModalWindow = ({ isActive, onClickClose }) => <div className={'modal' + isActive}>
<button className="hide" onClick={onClickClose}>X</button>
Test Modal
</div>

export default class Modal extends React.Component {
	state = {isActive: false}

	handleClick = () => {
		this.setState({isActive: true}) 
	}
	
	handleCloseModal = () => {
		this.setState({isActive: false})
	}

	render() {
		return (
		<div>
			<button className="show" onClick={this.handleClick}>Show Modal</button>
			<ModalWindow isActive={(this.state.isActive) ? ' active' : ''} onClickClose={this.handleCloseModal}/>
		</div>)
	}
}