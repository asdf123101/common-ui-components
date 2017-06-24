import React from 'react';
import Form, { Warning } from '../components/Form';
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
  it('Display a warning when isValid prop is false', () => {
    const warning1 = shallow(
      <Warning isValid={false} validationType="length" />
    );
    expect(warning1.find('span.warning').length).toBe(1);
    const warning2 = shallow(
      <Warning isValid={true} validationType="length" />
    );
    expect(warning2.find('span.warning').length).toBe(0);
  });

  it('Exceeding the min length shows a warning on submit', () => {
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
    formWindow.find('input').last().simulate('submit');
    const inputField = formWindow.find('input').at(1);
    expect(inputField.prop('type')).toBe('password');
    const name = inputField.prop('name');
    const newValue = 'test';
    inputField.simulate('change', {
      target: { name: name, value: newValue }
    });
    inputField.simulate('blur');
    expect(formWindow.find('.warning').length).toBe(1);
  });
});
