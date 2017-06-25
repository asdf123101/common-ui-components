import React from 'react';
import SlideShow from '../components/SlideShow/';
import { mount } from 'enzyme';

describe('<SlideShow />', () => {
  it('The SlideShow has 5 slides', () => {
    const SlideShowWindow = mount(<SlideShow />);
    expect(SlideShowWindow.find('.slide').length).toBe(5);
  });
  it('Clicking on buttons does not change the center position', () => {
    const SlideShowWindow = mount(<SlideShow />);
    expect(SlideShowWindow.find('.slide').at(2).hasClass('center')).toBe(true);
    SlideShowWindow.find('button.right').simulate('click');
    expect(SlideShowWindow.find('.slide').at(2).hasClass('center')).toBe(true);
    SlideShowWindow.find('button.left').simulate('click');
    expect(SlideShowWindow.find('.slide').at(2).hasClass('center')).toBe(true);
  });

  it('Clicking on buttons add z-index style to the corresponding box', () => {
    const SlideShowWindow = mount(<SlideShow />);
    SlideShowWindow.find('button.left').simulate('click');
    expect(SlideShowWindow.find('.slide4').props().style.zIndex).toBeTruthy();
    expect(SlideShowWindow.find('.slide0').props().style.zIndex).toBeFalsy();
    SlideShowWindow.find('button.right').simulate('click');
    expect(SlideShowWindow.find('.slide0').props().style.zIndex).toBeTruthy();
    expect(SlideShowWindow.find('.slide4').props().style.zIndex).toBeFalsy();
  });
});
