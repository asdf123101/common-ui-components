import React from 'react';
import Counter from '../components/Counter';
import { mount } from 'enzyme';

// state in redux app is preserved among tests

describe('<Counter />', () => {
  const setup = () => {
    const counter = mount(<Counter />);
    return { counter };
  };

  it('Clicking on add increment the counter', () => {
    const { counter } = setup();
    counter.find('button').at(0).simulate('click').simulate('click');
    expect(counter.find('StaticCounter').props().value).toBe(2);
  });

  it('Clicking on minus decrement the counter', () => {
    const { counter } = setup();
    counter.find('button').at(1).simulate('click');
    expect(counter.find('StaticCounter').props().value).toBe(1);
  });

  it('Clicking on minus never goes below 0', () => {
    const { counter } = setup();
    const minusButton = counter.find('button').at(1);
    minusButton.simulate('click').simulate('click');
    expect(counter.find('StaticCounter').props().value).toBe(0);
  });
});
