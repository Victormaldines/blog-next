import { POSTS_URL } from '@/config/app-config';
import { PostData } from '@/domain/posts/post';
import { fetchJson } from '@/utils/fetch-json';
import { markdownToHtml } from '@/utils/markdown-to-html';

export const getPost = async (slug: string | string[]): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}&filters[slug]=${slugString}`;
  const jsonPosts = await fetchJson<PostData[]>(url);
  const content = markdownToHtml(jsonPosts[0].attributes.content);
  const finalContent = {
    id: jsonPosts[0].id,
    attributes: { ...jsonPosts[0].attributes },
    content,
  };
  // console.log('aa', finalContent, 'bb');
  return [finalContent];
};
