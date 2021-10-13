import React from 'react';
import classes from './post-content.module.css';
import PostHeader from './post-header';
import ReactMarkdown from 'react-markdown';

const DUMMY_POSTS = {
  slug: 'first-blog',
  title: 'My First Blog',
  image: 'getting-started-nextjs.png',
  date: '2021-7-19',
  content: '# Postingan Pertama',
};

export default function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POSTS.content}</ReactMarkdown>
    </article>
  );
}
