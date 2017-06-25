import React from 'react';
import SlideShow from './SlideShow';
import SharedTitle from '../Utils/SharedTitle.jsx';

import './style.css';

const ModalDemo = () =>
  <div>
    <SharedTitle />
    <p>
      Clicking the button will slide the blocks and the center block is always
      colored. The animation is borrowed from React-flip-move library with some
      hack. Overall doing transition animation in React is a bit hard.{' '}
    </p>
    <hr />
    <SlideShow />
  </div>;

export default ModalDemo;
