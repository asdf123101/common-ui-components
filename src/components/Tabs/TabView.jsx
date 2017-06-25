import React from 'react';
import PropTypes from 'prop-types';

const data = {
  tabs: ['One', 'Two', 'Three'],
  content: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like.',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
  ]
};

const ContentView = ({ content }) =>
  <div className="tabContent">{content}</div>;

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

export default class TabView extends React.Component {
  static propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.string),
    content: PropTypes.arrayOf(PropTypes.string)
  };

  state = {
    activeIndex: 0
  };

  handleClick = id => {
    this.setState({ activeIndex: id });
  };

  isActive = id => {
    return id === this.state.activeIndex ? 'active' : '';
  };

  render() {
    const tabs = this.props.data ? this.props.data.tabs : data.tabs;
    const tabContent = this.props.data
      ? this.props.data.content[this.state.activeIndex]
      : data.content[this.state.activeIndex];
    return (
      <div>
        <TabGroup
          tabs={tabs}
          handleClick={this.handleClick}
          isActive={this.isActive}
        />
        <ContentView content={tabContent} />
      </div>
    );
  }
}
