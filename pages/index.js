import Head from 'next/head';
import FeaturePost from '../components/home-page/featured-post';
import Hero from '../components/home-page/hero';
import { getFeaturePosts } from '../lib/posts-utils';

export default function HomePage(props) {
  const { posts } = props;

  return (
    <>
      <Head>
        <title>Ihsan's Blog</title>
        <meta
          name='description'
          content='I post about programming and web developement'
        />
      </Head>
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
