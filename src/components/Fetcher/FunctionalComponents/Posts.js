import React from 'react';
import PropTypes from 'prop-types';

import { PostItem } from '../style';

export default function Posts({ posts }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {posts.map((post, i) =>
        <PostItem key={i}>
          <a href={post.url} target="_blank">
            {post.title}
          </a>
        </PostItem>
      )}
    </ul>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};
