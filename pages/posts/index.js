import AllPosts from '../../components/post/all-posts';

const DUMMY_POSTS = [
  {
    slug: 'first-blog',
    title: 'My First Blog',
    image: 'getting-started-nextjs.png',
    excerpt: 'ini adalah blog saya yang pertama',
    date: '2021-7-19',
  },
  {
    slug: 'second-blog',
    title: 'My Second Blog',
    image: 'getting-started-nextjs.png',
    excerpt: 'ini adalah blog saya yang kedua',
    date: '2021-7-19',
  },
  {
    slug: 'third-blog',
    title: 'My Third Blog',
    image: 'getting-started-nextjs.png',
    excerpt: 'ini adalah blog saya yang ketiga',
    date: '2021-7-19',
  },
  {
    slug: 'fourth-blog',
    title: 'My Fourth Blog',
    image: 'getting-started-nextjs.png',
    excerpt: 'ini adalah blog saya yang keempat',
    date: '2021-7-19',
  },
];

export default function AllPostPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}
