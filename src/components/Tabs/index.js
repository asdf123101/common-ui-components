import React from 'react';
import TabView from './TabView';
import SharedTitle from '../Utils/SharedTitle.jsx';

import './style.css';

const TabViewDemo = () =>
  <div>
    <SharedTitle />
    <p>
      The navigation bar is itself a tab view, althoug it is constructed
      with react-route to update URL. The following is a pure tab view that
      does not interfere with URL.
    </p>
    <hr />
    <TabView />
  </div>;

export default TabViewDemo;
