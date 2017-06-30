import { handleAction, handleActions, combineActions } from 'redux-actions';
import { combineReducers } from 'redux';
import fetch from 'isomorphic-fetch';
import { put, call, takeEvery } from 'redux-saga/effects';

import * as C from '../actions/constants';
import actions from '../actions/';

const selectedSubreddit = handleAction(
  C.SELECT_SUBREDDIT,
  (state, { payload }) => payload,
  'reactjs'
);

export function* fetchPost({ payload }) {
  const targetURL = `https://www.reddit.com/r/${payload}.json`;
  yield put(actions.requestPost(payload));
  try {
    const response = yield call(fetch, targetURL);
    const json = yield response.json();
    yield put(actions.receivePosts(payload, json));
  } catch (error) {
    error => console.log('An error occured.', error);
  }
}

export function* watchFetchPosts() {
  yield takeEvery(C.FETCH_POSTS, fetchPost);
}

const posts = handleActions(
  {
    [C.INVALIDATE_SUBREDDIT]: (state, { payload }) => ({
      ...state,
      didInvalidate: true
    }),
    [C.REQUEST_POST]: (state, { payload }) => ({
      ...state,
      isFetching: true,
      didInvalidate: false
    }),
    [C.RECEIVE_POSTS]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      didInvalidate: false,
      items: payload.posts,
      lastUpdated: payload.receivedAt
    })
  },
  {
    isFetching: false,
    didInvalidate: false,
    items: []
  }
);

const postsBySubreddit = handleAction(
  combineActions(C.INVALIDATE_SUBREDDIT, C.REQUEST_POST, C.RECEIVE_POSTS),
  (state, action) => {
    const subreddit = action.payload.subreddit;
    return {
      [subreddit]: posts(state[subreddit], action)
    };
  },
  {}
);
const reducer = combineReducers({ selectedSubreddit, postsBySubreddit });

export default reducer;
