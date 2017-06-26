import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';
import { Button, SingleSlide } from './style';

class Slide extends React.Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    center: PropTypes.string.isRequired,
    zIndex: PropTypes.number
  };
  render() {
    return (
      <SingleSlide index={this.props.index} zIndex={this.props.zIndex}>
        <h2>{this.props.slide}</h2>
      </SingleSlide>
    );
  }
}

export default class SlideShow extends React.Component {
  state = {
    indices: [0, 1, 2, 3, 4],
    direction: null
  };

  renderSlides = () => {
    let nSlide = this.state.indices.length;
    return (
      <div className="slide-group">
        <FlipMove duration={600} easing="ease-in-out">
          {this.state.indices.map((slide, index) => {
            const center = index === (nSlide - 1) / 2 ? ' center' : '';
            let zIndex = null;
            if (
              this.state.direction === 'left' &&
              index === this.state.indices.length - 1
            ) {
              zIndex = -10;
            }
            if (this.state.direction === 'right' && index === 0) {
              zIndex = -10;
            }
            return (
              <Slide
                index={index}
                center={center}
                slide={slide}
                key={slide}
                zIndex={zIndex}
              />
            );
          })}
        </FlipMove>
      </div>
    );
  };
  handleLeftClick = () => {
    let shiftedState = this.state.indices.slice(1);
    let newState = [...shiftedState, this.state.indices[0]];
    this.setState({ indices: newState });
    this.setState({ direction: 'left' });
  };

  handleRightClick = () => {
    let shiftedState = this.state.indices.slice(0, -1);
    let newState = [
      this.state.indices[this.state.indices.length - 1],
      ...shiftedState
    ];
    this.setState({ indices: newState });
    this.setState({ direction: 'right' });
  };

  render() {
    return (
      <div className="slideshow">
        <Button onClick={this.handleLeftClick}>
          &lt;
        </Button>
        {this.renderSlides()}
        <Button onClick={this.handleRightClick}>
          &gt;
        </Button>
      </div>
    );
  }
}
