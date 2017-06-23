import React from 'react';
import Form from '../components/Form';
import { mount, shallow } from 'enzyme';

describe('Place holder', () => {
  const colorTest = (inputWindow, color) => {
    expect(inputWindow.find('input').at(0).prop('style'))
      .toHaveProperty('color', color);
  };

  it('Placeholder shows on loading and color is grey', () => {
    const inputWindow = shallow(<Form />);
    expect(inputWindow.find('input').at(0).prop('value')).toBeTruthy();
    colorTest(inputWindow, 'grey');
  });

  it('Clicking on the input field hides the placeholder', () => {
    const inputWindow = mount(<Form />);
    const inputField = inputWindow.find('input').at(0);
    inputField.simulate('focus');
    expect(inputField.prop('value')).toBe('');
  });

  it('Typing in the input area shows the text with color black, \
  	deleting the text shows placeholder again on blur', () => {
    const inputWindow = mount(<Form />);
    const inputField = inputWindow.find('input').at(0);
      inputField.simulate('focus');
      const newValue = 'Entered new value'
    inputField.node.value = newValue;
    inputField.simulate('change', inputField);
    expect(inputField.prop('value')).toBe(newValue);
    colorTest(inputWindow, 'black');
    inputField.simulate('change', { target: { value: '' } });
    inputField.simulate('blur');
    expect(inputField.prop('value')).toBe('test');
    colorTest(inputWindow, 'grey');
  });
});

describe('Validation', () => {
  it('Exceeding the max length shows show a warning', () => {
    const inputWindow = mount(<InputWithPlaceHolder maxLength={8}/>)
    const inputField = inputWindow.find('input')
    const newValue = 'test   test'
    inputField.simulate('change', { target: { value: newValue } });
    expect(inputWindow.find('.warning').text()).toTruthy()
  })
})
