import { PostDataContent } from '@/domain/posts/post';

export const markdownToHtml = (content: PostDataContent[]): string => {
  let data = '';
  content.forEach((paragraph) => {
    data += `${paragraph.children[0].text}\n`;
  });
  return data;
};
