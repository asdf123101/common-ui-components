import React from 'react';
import Counter from './Counter';
import SharedTitle from '../Utils/SharedTitle.jsx';

// import './style.css';

const CounterDemo = () =>
  <div>
    <SharedTitle />
    <p>
      This state of this counter is managed by Redux instead of React. Note that
      the counter does not change after switching to other components because
      the state in redux is not managed by the root component.
    </p>
    <hr />
    <Counter />
  </div>;

export default CounterDemo;
