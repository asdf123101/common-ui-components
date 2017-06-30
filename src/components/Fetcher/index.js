import React, { Component } from 'react';
import { Provider } from 'react-redux';

import SharedTitle from '../Utils/SharedTitle';
import configureStore from './configureStore';
import RedditFetcher from './RedditFetcher';

const store = configureStore();

export default class FetcherDemo extends Component {
  render() {
    return (
      <div>
        <SharedTitle />
        <p>
          This is a reddit posts fetcher managed by Redux. It fetches the latest
          posts from the selected subreddit. The code is very similar to the one
          in the Redux official doc, expect that the middleware manages async
          actions is Redux-Saga instead of Redux-Thunk.
        </p>
        <hr />
        <Provider store={store}>
          <RedditFetcher />
        </Provider>
      </div>
    );
  }
}
