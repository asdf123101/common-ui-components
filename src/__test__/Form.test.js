import React from 'react';
import Form from '../components/Form/Form.js';
import { mount, shallow } from 'enzyme';

describe('Place holder', () => {
  const colorTest = (inputWindow, color) => {
    const inputField = inputWindow.find('input').at(0).prop('style');
    expect(inputField).toHaveProperty('color', color);
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
    const placeHolder = inputField.prop('value');
    const name = inputField.prop('name');
    inputField.simulate('focus');
    expect(inputField.prop('value')).toBe('');
    const newValue = 'Entered new value';
    inputField.simulate('change', {
      target: {
        name: name,
        value: newValue
      }
    });
    expect(inputField.prop('value')).toBe(newValue);
    colorTest(inputWindow, 'black');
    inputField.simulate('change', {
      target: {
        name: name,
        value: ''
      }
    });
    inputField.simulate('blur');
    expect(inputField.prop('value')).toBe(placeHolder);
    colorTest(inputWindow, 'grey');
  });
});

describe('Validation', () => {
  it('Not meeting the min length shows a warning on blur', () => {
    const formWindow = mount(<Form />);
    const inputField = formWindow.find('input').at(0);
    const name = inputField.prop('name');
    const newValue = 'test';
    inputField.simulate('change', {
      target: { name: name, value: newValue }
    });
    inputField.simulate('blur');
    expect(formWindow.find('.warning').at(0).length).toBe(1);
  });

  it('Unmatched password shows a warning on blur', () => {
    const formWindow = mount(<Form />);
    const inputField = formWindow.find('input').at(1);
    expect(inputField.prop('type')).toBe('password');
    const name = inputField.prop('name');
    const newValue = 'test';
    inputField.simulate('change', {
      target: { name: name, value: newValue }
    });
    inputField.simulate('blur');
    expect(formWindow.find('.warning').length).toBeTruthy();
  });

  it('Submitting an empty form shows all warnings', () => {
    const formWindow = mount(<Form />);
    formWindow.simulate('submit');
    // two warnings on two pwd input fields
    expect(formWindow.find('.warning').length).toBeTruthy();
  });
});
