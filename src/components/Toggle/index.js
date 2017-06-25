import React from 'react';
import { Motion, spring } from 'react-motion';
import FadeInOut from '../Animation/FadeInOut'

import './style.css';

export default class Toggle extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const animatedContent = this.state.open ? [{key: 'FadeInOut',data:'FadeInOut', opacity: spring(1)}] : null
    return (
      <div>
        <p>
          Try the toggle which controls the status and animation. The block
          itself is also clickable.
        </p>
        <button onClick={this.handleClick}>
          Toggle
        </button>
        <h3>Status: {this.state.open ? 'open' : 'closed'}</h3>
        <Motion style={{ x: spring(this.state.open ? 200 : 0) }}>
          {({ x }) =>
            <div className="toggle-bg">
              <div
                className="toggle-block"
                onClick={this.handleClick}
                style={{
                  transform: `translate3d(${x}px, 0, 0)`,
                }}
              />
            </div>}
        </Motion>
        <FadeInOut content={animatedContent}/>
      </div>
    );
  }
}
