import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

// action creator
const ADD = 'ADD';
const MINUS = 'MINUS';
function add() {
  return { type: ADD };
}
function minus() {
  return { type: MINUS };
}

// reducer
const app = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      if (state <= 0) {
        alert('Gotcha. The counter has to be positive!');
        return state;
      }
      return state - 1;
    default:
      return state;
  }
};

// create store
let store = createStore(app);

// react component
const StaticCounter = props =>
  <div>
    <p>This state of this counter is managed by Redux instead of React.</p>
    <h2>{props.value}</h2>
    <button onClick={props.handleClickAdd}>Add </button>
    <button onClick={props.handleClickMinus}>Minus </button>
  </div>;

StaticCounter.propTypes = {
  value: PropTypes.number.isRequired,
  handleClickAdd: PropTypes.func.isRequired,
  handleClickMinus: PropTypes.func.isRequired
};
// activate the container StaticCounter
const mapStateToProps = state => {
  return {
    value: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClickAdd: () => {
      dispatch(add());
    },
    handleClickMinus: () => {
      dispatch(minus());
    }
  };
};

const ActiveCounter = connect(mapStateToProps, mapDispatchToProps)(
  StaticCounter
);

// passing the store
const Counter = () =>
  <Provider store={store}>
    <ActiveCounter />
  </Provider>;
export default Counter;
