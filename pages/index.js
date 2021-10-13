import { useEffect } from 'react';
import FeaturePost from '../components/home-page/featured-post';
import Hero from '../components/home-page/hero';
import { getFeaturePosts } from '../lib/posts-utils';

export default function HomePage(props) {
  const { posts } = props;

  return (
    <>
      <Hero />
      <FeaturePost posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturePosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
