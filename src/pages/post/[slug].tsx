import { countAllPosts } from '@/data/posts/count-all-posts';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { getPost } from '@/data/posts/get-post';
import { PostData } from '@/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Post } from '@/containers/Post';

export type DynamicPostProps = {
  post: PostData;
};

export const DynamicPost = ({ post }: DynamicPostProps) => {
  return <Post post={post} />;
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(`pagination[limit]=${numberOfPosts}`);
  // console.log(
  //   posts.map((post) => {
  //     return post.attributes.slug;
  //   }),
  // );
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.attributes.slug,
        },
      };
    }),
    fallback: false,
  };
};

// context -> returned by getStaticPaths
export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) return { props: {} };
  if (typeof context.params.slug == 'undefined') return { props: {} };

  const posts = await getPost(context.params.slug);

  return {
    props: {
      post: posts[0],
      // revalidate: number
    },
  };
};
