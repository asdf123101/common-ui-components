import { createActions } from 'redux-actions';
import * as C from './constants';

const actions = createActions(
  {
    [C.RECEIVE_POSTS]: (subreddit, json) => ({
      subreddit,
      posts: json.data.children.map(child => child.data),
      receivedAt: Date.now()
    }),
    [C.INVALIDATE_SUBREDDIT]: subreddit => ({ subreddit }),
    [C.REQUEST_POST]: subreddit => ({ subreddit })
  },
  C.SELECT_SUBREDDIT,
  C.FETCH_POSTS
);

export default actions;
