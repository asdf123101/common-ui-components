import React from 'react';
import Form, { InputWithPlaceHolder } from '../components/Form';
import { mount, shallow } from 'enzyme';

describe('Place holder', () => {
  const colorTest = (inputWindow, color) => {
    expect(inputWindow.find('input').prop('style')).toHaveProperty(
      'color',
      color
    );
  };

  it('Placeholder shows on loading and color is grey', () => {
    const inputWindow = shallow(<InputWithPlaceHolder placeHolder="test" />);
    expect(inputWindow.find('input').prop('value')).toBe('test');
    colorTest(inputWindow, 'grey');
  });

  it('Clicking on the input field hides the placeholder', () => {
    const inputWindow = shallow(<InputWithPlaceHolder placeHolder="test" />);
    const inputField = inputWindow.find('input');
    inputField.simulate('focus');
    expect(inputWindow.find('input').prop('value')).toBe('');
  });

  it('Typing in the input area shows the text with color black, \
  	deleting the text shows placeholder again on blur', () => {
    const inputWindow = mount(<InputWithPlaceHolder placeHolder="test" />);
    const inputField = inputWindow.find('input');
    inputField.simulate('focus');
    const newValue = 'Entered new value';
    inputField.simulate('change', { target: { value: newValue } });
    expect(inputField.prop('value')).toBe(newValue);
    colorTest(inputWindow, 'black');
    inputField.simulate('change', { target: { value: '' } });
    inputField.simulate('blur');
    expect(inputField.prop('value')).toBe('test');
    colorTest(inputWindow, 'grey');
  });
});
