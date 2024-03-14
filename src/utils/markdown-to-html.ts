export const markdownToHtml = (content: Array<any>): string => {
  let data = '';
  content.forEach((paragraph) => {
    data += `${paragraph.children[0].text}\n`;
  });
  return data;
};
