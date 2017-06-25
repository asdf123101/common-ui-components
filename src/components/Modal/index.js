import React from 'react';
import Modal from './Modal';
import SharedTitle from '../Utils/SharedTitle.jsx';

import './style.css';

const ModalDemo = () =>
  <div>
    <SharedTitle />
    <p>A modal will show after clicking the button</p>
    <hr />
    <Modal />
  </div>;

export default ModalDemo;
