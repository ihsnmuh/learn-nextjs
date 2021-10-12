import React from 'react';
import PostGrid from '../post/posts-grid';
import classes from './featured-post.module.css';

export default function FeaturePost(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Post</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
}
