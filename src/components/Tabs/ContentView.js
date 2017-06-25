import React from 'react';

const ContentView = props => <div className="tabContent">{props.content}</div>;

const TabGroup = props => {
  return (
    <div className="tabGroup">
      {props.tabs.map((tabName, id) =>
        <button
          onClick={() => props.handleClick(id)}
          className={'tab ' + props.isActive(id)}
          key={tabName}
        >
          {tabName}
        </button>
      )}
    </div>
  );
};
