import fetch from 'isomorphic-fetch';
import { put, call } from 'redux-saga/effects';

import actions from '../components/Fetcher/actions/';
import * as c from '../components/Fetcher/actions/constants';
import { fetchPost } from '../components/Fetcher/reducers/index';
import reducer from '../components/Fetcher/reducers';

describe('Check action creator', () => {
  const testPayload = 'testPayload';

  it('Check select subreddit action is correctly setup', () => {
    expect(actions.selectSubreddit(testPayload)).toEqual({
      type: c.SELECT_SUBREDDIT,
      payload: testPayload
    });
  });

  it('Check receive posts action is working', () => {
    const targetReddit = 'darksouls';
    const targetURL = `https://www.reddit.com/r/${targetReddit}.json`;
    const json = fetch(targetURL)
      .then(response => response.json())
      .then(json => {
        const postLength = json.data.children.length;
        expect(
          actions.receivePosts(targetReddit, json).payload.posts.length
        ).toBe(postLength);
      });
  });
});

describe('Select works', () => {
  it('Default state is set', () => {
    expect(reducer(undefined, {}).selectedSubreddit).toBe('reactjs');
  });
  it('Selected reddit should change on new selections', () => {
    const testReddit = 'Darksouls';
    const action = actions.selectSubreddit(testReddit);
    const newState = reducer(undefined, action);
    expect(newState.selectedSubreddit).toEqual(testReddit);
  });
});

describe('Test fetch posts async action', () => {
  const testPayload = 'Darksouls';
  // note that gen is shared by all tests
  // so .next() will excetute the actual next yield
  // in fetchPost
  const gen = fetchPost(actions.fetchPosts(testPayload));

  it('Fetch posts start by setting isFetching to true', () => {
    expect(gen.next().value).toEqual(put(actions.requestPost(testPayload)));
  });

  it('Fetch posts then fetch from the reditt', () => {
    const targetURL = `https://www.reddit.com/r/${testPayload}.json`;
    const reponse = gen.next();
    expect(reponse.value).toEqual(call(fetch, targetURL));
  });
});

describe('Request works', () => {
  it('Default post state is empty', () => {
    const testReddit = 'Darksouls';
    const defaultState = reducer(undefined, []).postsBySubreddit;
    expect(defaultState).toEqual({});
  });
  it('Request a subreddit should change isFetching status to true', () => {
    const testReddit = 'Darksouls';
    const action = actions.requestPost(testReddit);
    const result = {
      [testReddit]: {
        isFetching: true,
        didInvalidate: false,
        items: []
      }
    };
    const posts = reducer(undefined, action).postsBySubreddit;
    expect(posts).toEqual(result);
    const isFetching = posts[testReddit].isFetching;
    expect(isFetching).toBeTrue;
  });
});
