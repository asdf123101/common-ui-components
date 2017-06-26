import React from 'react';
import SlideShow from '../components/SlideShow/';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Button, SingleSlide } from '../components/SlideShow/style';

describe('<SlideShow />', () => {
  it('The SlideShow has 5 slides', () => {
    const SlideShowWindow = mount(<SlideShow />);
    expect(SlideShowWindow.find(SingleSlide).length).toBe(5);
  });

  it('Snapshot testing clicking button behavior', () => {
    let SlideShowWindow = mount(<SlideShow />);
    let tree = toJson(SlideShowWindow);
    expect(tree).toMatchSnapshot();
    SlideShowWindow.find(Button).at(0).simulate('click');
    tree = toJson(SlideShowWindow);
    expect(tree).toMatchSnapshot();
    SlideShowWindow.find(Button).at(1).simulate('click');
    tree = toJson(SlideShowWindow);
    expect(tree).toMatchSnapshot();
  });

  it('Clicking on buttons add z-index style to the corresponding box', () => {
    const SlideShowWindow = mount(<SlideShow />);
    SlideShowWindow.find(Button).at(0).simulate('click');
    let Slide0 = SlideShowWindow.find(SingleSlide).at(0);
    let Slide4 = SlideShowWindow.find(SingleSlide).at(4);
    expect(Slide4.prop('zIndex')).toBeTruthy();
    expect(Slide0.prop('zIndex')).toBeFalsy();
    SlideShowWindow.find(Button).at(1).simulate('click');
    Slide0 = SlideShowWindow.find(SingleSlide).at(0);
    Slide4 = SlideShowWindow.find(SingleSlide).at(4);
    expect(Slide0.prop('zIndex')).toBeTruthy();
    expect(Slide4.prop('zIndex')).toBeFalsy();
  });
});
