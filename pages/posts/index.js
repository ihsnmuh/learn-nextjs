import AllPosts from '../../components/post/all-posts';
import { getAllPosts } from '../../lib/posts-utils';

export default function AllPostPage(props) {
  const { posts } = props;

  return <AllPosts posts={posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
