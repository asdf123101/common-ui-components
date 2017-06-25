import React from 'react';
import TabView from '../components/Tabs/TabView';
import { shallow, mount } from 'enzyme';

describe('<TabView />', () => {
  let props;
  let mountedTab;
  const tabView = () => {
    if (!mountedTab) {
      return mount(<TabView {...props} />);
    }
    return mountedTab;
  };
  beforeEach(() => {
    props = {
      data: undefined
    };
    mountedTab = undefined;
  });

  it('Default active on the first tab and not active on the rest', () => {
    const tab = tabView().find('.tab');
    expect(tab.at(0).hasClass('active')).toBe(true);
    expect(tab.at(1).hasClass('active')).toBe(false);
    expect(tabView().find('TabGroup').length).toBe(1);
  });

  it('Default active content is correct', () => {
    const data = {
      tabs: ['one', 'two', 'thre'],
      content: ['1', '2', '3']
    };
    props = {
      data
    };
    const tabContent = tabView().find('.tabContent');
    expect(tabContent.find('div').text()).toBe('1');
  });

  it('Click on the inactive tab activate the tab', () => {
    const data = {
      tabs: ['one', 'two', 'thre'],
      content: ['1', '2', '3']
    };
    props = {
      data
    };
    const tabViewWindow = tabView();
    const tab1 = tabViewWindow.find('.tab').at(1);
    const tab1Activated = tab1.simulate('click');
    expect(tab1Activated.hasClass('active')).toBe(true);
    const tabContent = tabViewWindow.find('.tabContent');
    expect(tabContent.render().find('div').text()).toBe('2');
  });
});
