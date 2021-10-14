import PostContent from '../../components/post/post-detail/post-content';
import { getPostData, getPostFiles } from '../../lib/posts-utils';

export default function DetailPost(props) {
  const { post } = props;
  return <PostContent post={post} />;
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
  };
}

export function getStaticPaths() {
  const postFileNames = getPostFiles();
  const slug = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slug.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
