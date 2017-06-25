import React from 'react';
import Modal from '../components/Modal/Modal';
import { mount, shallow } from 'enzyme';

describe('<Modal />', () => {
  it('Clicking show button shows a new node with class named "modal"', () => {
    const modal = mount(<Modal />);
    expect(modal.find('.modal').exists()).toBe(false);
    modal.find('button.show').simulate('click');
    expect(modal.find('.modal').exists()).toBe(true);
  });

  it('Clicking the close button close the modal window and make the class inactive', () => {
    const modal = mount(<Modal />);
    modal.find('button.show').simulate('click');
    modal.find('button.hide').simulate('click');
    expect(modal.find('.modal').exists()).toBe(false);
  });
});
