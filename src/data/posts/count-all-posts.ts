import { POSTS_URL } from '@/config/app-config';
import { PostData } from '@/domain/posts/post';
import { fetchJson } from '@/utils/fetch-json';

export const countAllPosts = async (): Promise<number> => {
  const numberOfPosts = await fetchJson<PostData[]>(POSTS_URL);
  return numberOfPosts.length;
};
