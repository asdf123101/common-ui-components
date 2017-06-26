import React from 'react';
import PropTypes from 'prop-types';

import { ModalWrapper, ModalPara, ModalButton } from './style.js';

const ModalWindow = ({ isActive, handleClickClose }) => {
  if (isActive) {
    return (
      <ModalWrapper>
        <ModalButton onClick={handleClickClose}>X</ModalButton>
        <ModalPara>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalPara>
      </ModalWrapper>
    );
  }
  return null;
};

ModalWindow.displayName = 'ModalWindow';

ModalWindow.PropTypes = {
  isActive: PropTypes.bool.isRequired,
  handleClickClose: PropTypes.func.isRequired
};

export { ModalWindow };

export default class Modal extends React.Component {
  state = { isActive: false };

  handleClick = () => {
    this.setState({ isActive: true });
  };

  handleCloseModal = () => {
    this.setState({ isActive: false });
  };

  render() {
    return (
      <div>
        <button className="show" onClick={this.handleClick}>Show Modal</button>
        <ModalWindow
          isActive={this.state.isActive}
          handleClickClose={this.handleCloseModal}
        />
      </div>
    );
  }
}
