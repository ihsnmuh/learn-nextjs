import AllPosts from '../../components/post/all-posts';
import { getAllPosts } from '../../lib/posts-utils';
import Head from 'next/head';

export default function AllPostPage(props) {
  const { posts } = props;

  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name='description'
          content='A list of all programing ihsan know'
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
