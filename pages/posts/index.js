import AllPosts from '../../components/post/all-posts';
import { getFeaturePosts } from '../../lib/posts-utils';

export default function AllPostPage(props) {
  const { posts } = props;

  return <AllPosts posts={posts} />;
}

export function getStaticProps() {
  const featuredPosts = getFeaturePosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
