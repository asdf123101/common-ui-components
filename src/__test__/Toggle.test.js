import React from 'react';
import Toggle from '../components/Toggle';
import FadeInOut from '../components/Utils/FadeInOut'
import { mount, shallow } from 'enzyme';

describe('Toggle', () => {
  it('Clicking the toggle shows the FadeInOut element', () => {
    const toggoleWindow = mount(<Toggle/>)
    toggoleWindow.find('button').simulate('click')
    expect(toggoleWindow.find('FadeInOut')).toBeTruthy()
    toggoleWindow.find('button').simulate('click')
    expect(toggoleWindow.contains(<FadeInOut/>)).toBeFalsy()
  })
})
