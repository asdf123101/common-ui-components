import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from './actions/';
import { Picker, Posts } from './FunctionalComponents';
import { RefreshButton } from './style.js';
function mapStateToProps(state) {
  const { selectedSubreddit, postsBySubreddit } = state;
  const { isFetching, lastUpdated, items: posts } = postsBySubreddit[
    selectedSubreddit
  ] || {
    isFetching: true,
    items: []
  };
  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  };
}

class RedditFetcher extends Component {
  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props;
    dispatch(actions.fetchPosts(selectedSubreddit));
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = this.props;
      dispatch(actions.fetchPosts(selectedSubreddit));
    }
  }

  handleChange = nextSubreddit => {
    this.props.dispatch(actions.selectSubreddit(nextSubreddit));
    this.props.dispatch(actions.fetchPosts(nextSubreddit));
  };

  handleRefreshClick = e => {
    e.preventDefault();

    const { dispatch, selectedSubreddit } = this.props;
    dispatch(actions.invalidateSubreddit(selectedSubreddit));
    dispatch(actions.fetchPosts(selectedSubreddit));
  };

  static propTypes = {
    selectedSubreddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  };

  render() {
    const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props;
    const options = ['Reactjs', 'Darksouls'];
    return (
      <div>
        <Picker
          value={selectedSubreddit}
          onChange={this.handleChange}
          options={options}
        />
        <RefreshButton isFetching onClick={this.handleRefreshClick}>
          {isFetching ? '...' : 'Refresh'}
        </RefreshButton>
        {lastUpdated &&
          <p>Last updated at {new Date(lastUpdated).toLocaleTimeString()}.</p>}
        {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
        {posts.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} />
          </div>}
      </div>
    );
  }
}

export default connect(mapStateToProps)(RedditFetcher);
